'use client';

import {Container, Flex, Space, rem, Text} from '@mantine/core';
import React, {useEffect, useState} from 'react';
import cx from 'clsx';
import globalCss from '../../styles/global.module.css';
import {MapData} from '@/types';
import classes from './style.module.css';
import EmbeddedWebsite from "@/components/Location/EmbeddedWebsite";

const Map = () => {
    const [data, setData] = useState<MapData>({
        rows: [],
        cols: [],
        mapData: [],
    });
    const [loading, setLoading] = useState(true);
    const [selectedItem, setSelectedItem] = useState([]);

    const handleChange = (event: any) => {
        const selectedItemName = event.target.value;
        const foundItem = data.rows.indexOf(selectedItemName);
        if (foundItem >= 0) {
            let list = data.mapData[foundItem].map((e, i) => ({
                vt: data.cols[i],
                kc: e,
            }));
            list = list.sort((a, b) => a.kc - b.kc);
            setSelectedItem(list as any);
        }
    };
    const [showWebsite, setShowWebsite] = useState(false);

    const show = () => {
        setShowWebsite(true);
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await fetch(
                `/api?${new URLSearchParams({
                    index: '2',
                })}`
            );
            const dataFetched = await response.json();
            setData(dataFetched.data);
            setLoading(false);
        };
        fetchData();
    }, []);
    return (
        <Container
            m={0}
            py={rem(20)}
            classNames={{
                root: classes.wrapper,
            }}
        >
            <Flex align="center" justify="center" mb={30}>
                <Text className={cx(globalCss.title, globalCss.bold, globalCss.textCenter)}>
                    DOANH NGHIỆP SẢN XUẤT, KINH DOANH
                </Text>
            </Flex>
            <Space h="xl"/>
            {loading ? (
                <>
                    Loading
                </>
            ) : (
                <div>
                    {showWebsite ? (
                        <>
                            <button onClick={() => setShowWebsite(false)}>Close map</button>
                            <EmbeddedWebsite url="http://103.149.87.49:3000/" />
                        </>
                    ) : (
                        <>
                            <div>
                                <button onClick={show}>Open map</button>
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <img src="/assets/images/map.png" style={{width: '100%'}}/>
                            </div>
                            <select onChange={handleChange}>
                                <option value="">Select an item</option>
                                {(data.rows || []).map((item, i) => (
                                    <option key={item + i} value={item}>{item}</option>
                                ))}
                            </select>
                            {selectedItem && (
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Doanh nghiệp vận tải</th>
                                        <th>Khoảng cách</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {selectedItem.map((item, i) => (
                                        <tr key={i}>
                                            <td>{(item as any).vt}</td>
                                            <td>{(item as any).kc.toFixed(2)} km</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            )}
                        </>
                    )}
                </div>
            )}
        </Container>
    );
};

export default Map;
