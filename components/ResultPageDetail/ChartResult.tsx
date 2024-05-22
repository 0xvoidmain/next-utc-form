import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
} from 'chart.js';
import {Bar, Pie} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

interface PropChart {
    transportationServices?: string[],
    isSelfLogistic?: string[],
    quantityLogisticEmployees?: string[],
    logisticServices?: string[],
    doituongkhaosat?: string[],
    quantityEmployees?: string[]
    logisticExpense?: string[]
    transportationWays?: string[]
    importantFactors?: string[]
    quantityEmployees_0?: string[]
    logisticServices_1?: string[]
    logisticServices_Xep?: string[]

}

const TransportationServices = (transportationServices?: PropChart) => {
    let data: number[] = [];
    if (transportationServices && transportationServices.transportationServices) {
        const totalCount = transportationServices.transportationServices.length;
        let noiDiaCount = (transportationServices.transportationServices.filter((service: any) => service === 'Dịch vụ vận tải nội địa').length / totalCount) * 100;
        let containerCount = ((transportationServices.transportationServices.filter((service: any) => service === 'Dịch vụ vận chuyển Container').length / totalCount) * 100);
        let quocTeCount = (transportationServices.transportationServices.filter((service: any) => service === 'Dịch vụ vận chuyển quốc tế').length / totalCount) * 100;
        let ketHopCount = (transportationServices.transportationServices.filter((service: any) => service === 'Dịch vụ vận chuyển quốc tế, Dịch vụ vận tải nội địa, Dịch vụ vận chuyển Container').length / totalCount) * 100;

        // Total %
        const totalPercentage =
            noiDiaCount +
            containerCount +
            quocTeCount +
            ketHopCount;
        // Check Total %
        if (totalPercentage !== 100) {
            // change
            const adjustmentFactor = 100 / totalPercentage;
            noiDiaCount *= adjustmentFactor;
            containerCount *= adjustmentFactor;
            quocTeCount *= adjustmentFactor;
            ketHopCount *= adjustmentFactor;
        }
        data = [
            Math.round(noiDiaCount),
            Math.round(containerCount),
            Math.round(quocTeCount),
            Math.round(ketHopCount),
        ];
    }

    const options: ChartOptions<'bar'> = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Thống kê trong năm 2023',
            },
            datalabels: {
                anchor: 'center',
                align: 'center',
                color: 'white',
                formatter: (value: any) =>
                    `${value}%`,
            },
            tooltip: {
                callbacks: {
                    label(context: any) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += `${context.formattedValue}%`;
                        return label;
                    },
                },
            },
        },
    };
    const dataArcElement = {
        labels: ['Dịch vụ vận chuyển quốc tế', 'Dịch vụ vận tải nội địa', 'Dịch vụ cho thuê xe tải', 'Kết hợp nhiều phương thức vận tải'],
        datasets: [
            {
                data,
                backgroundColor: [
                    '#000077',
                ],
                barThickness: 20,
            },
        ],
    };

    return (
        <>
            <h4>1. Biểu đồ thể hiện số lượng nhân viên trong doanh nghiệp vận tải:</h4>
            <div style={{
                maxWidth: '800px',
                maxHeight: '300px'
            }}>
                <Bar options={options} data={dataArcElement} plugins={[ChartDataLabels]}/>
            </div>
        </>
    );
};

const IsSelfLogistic = (isSelfLogistic: PropChart) => {
    let data: number[] = [];
    let labels: string[] = [];
    if (isSelfLogistic && isSelfLogistic.isSelfLogistic) {
        const totalCount = isSelfLogistic.isSelfLogistic.length;
        let khongCount = (isSelfLogistic.isSelfLogistic.filter((service: any) => service === 'Không').length / totalCount) * 100;
        let coCount = ((isSelfLogistic.isSelfLogistic.filter((service: any) => service === 'Có').length / totalCount) * 100);

        // Total %
        const totalPercentage =
            khongCount +
            coCount;
        // Check Total %
        if (totalPercentage !== 100) {
            // change
            const adjustmentFactor = 100 / totalPercentage;
            khongCount *= adjustmentFactor;
            coCount *= adjustmentFactor;
        }
        data = [
            Math.round(khongCount),
            Math.round(coCount),
        ];
        labels = ['Không (%)', 'Có (%)'];
    }

    const options: ChartOptions<'pie'> = {
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
            title: {
                display: true,
                text: 'Thống kê trong năm 2023',
            },
            datalabels: {
                formatter: (value: any) => `${value}%`,
                color: '#fff',
            },
            tooltip: {
                callbacks: {
                    label(context: any) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += `${context.formattedValue}%`;
                        return label;
                    },
                },
            },
        },
    };
    const dataArcElement = {
        labels,
        datasets: [
            {
                data,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <h4 style={{marginTop: 50}}>
                2. Biểu đồ doanh nghiệp vận tải có cung cấp dịch vụ cho thuê kho bãi:
            </h4>
            <div style={{
                maxWidth: '660px',
                maxHeight: '300px'
            }}>
                <Pie
                    style={{maxHeight: '300px'}}
                    options={options}
                    data={dataArcElement}
                />
            </div>
        </>
    );
};

const QuantityLogisticEmployees = (quantityLogisticEmployees: PropChart) => {
    let data: number[] = [];
    if (quantityLogisticEmployees && quantityLogisticEmployees.quantityLogisticEmployees) {
        const totalCount = quantityLogisticEmployees.quantityLogisticEmployees.length;
        let khongCoCount = (quantityLogisticEmployees.quantityLogisticEmployees.filter((service: any) => service === 'Không có').length / totalCount) * 100;
        let max10NguoiCount = ((quantityLogisticEmployees.quantityLogisticEmployees.filter((service: any) => service === '1-10 người').length / totalCount) * 100);
        let max20NguoiCount = (quantityLogisticEmployees.quantityLogisticEmployees.filter((service: any) => service === '11-20 người').length / totalCount) * 100;
        let tren20NguoiCount = (quantityLogisticEmployees.quantityLogisticEmployees.filter((service: any) => service === 'Trên 21 người').length / totalCount) * 100;

        // Total %
        const totalPercentage =
            khongCoCount +
            max10NguoiCount +
            max20NguoiCount +
            tren20NguoiCount;

        // Check Total %
        if (totalPercentage !== 100) {
            // change
            const adjustmentFactor = 100 / totalPercentage;
            khongCoCount *= adjustmentFactor;
            max10NguoiCount *= adjustmentFactor;
            max20NguoiCount *= adjustmentFactor;
            tren20NguoiCount *= adjustmentFactor;
        }
        data = [
            Math.round(khongCoCount),
            Math.round(max10NguoiCount),
            Math.round(max20NguoiCount),
            Math.round(tren20NguoiCount),
        ];
    }

    const options: ChartOptions<'bar'> = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Thống kê trong năm 2023',
            },
            datalabels: {
                anchor: 'center',
                align: 'center',
                color: 'white',
                formatter: (value: any) =>
                    `${value}%`,
            },
            tooltip: {
                callbacks: {
                    label(context: any) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += `${context.formattedValue}%`;
                        return label;
                    },
                },
            },
        },
        // scales: {
        //   x: {
        //     ticks: {
        //       callback(value) {
        //         return `${value}%`;
        //       },
        //     },
        //   },
        // },
    };
    const dataArcElement = {
        labels: ['Không có', '1 - 10người', '11 - 20 người', 'Trên 21 người'],
        datasets: [
            {
                data,
                backgroundColor: [
                    'rgba(75, 192, 192, 1)',
                ],
                barThickness: 20,
            },
        ],
    };

    return (
        <>
            <h4 style={{marginTop: 50}}>
                3. Tỷ lệ người lao động có chuyên môn nghiệp vụ về logistics :
            </h4>
            <div style={{
                maxWidth: '800px',
                maxHeight: '300px'
            }}>
                <Bar options={options} data={dataArcElement} plugins={[ChartDataLabels]}/>
            </div>
        </>
    );
};

const LogisticServices = (logisticServices: PropChart) => {
    let data: number[] = [];
    if (logisticServices && logisticServices.logisticServices) {
        const totalCount = logisticServices.logisticServices.length;
        let duongBoCount = ((logisticServices.logisticServices.filter((service: any) => service === 'Đường bộ').length / totalCount) * 100);
        let duongSatCount = (logisticServices.logisticServices.filter((service: any) => service === 'Đường sắt').length / totalCount) * 100;
        let duongBienCount = (logisticServices.logisticServices.filter((service: any) => service === 'Đường biến').length / totalCount) * 100;
        let duongHangKhongCount = (logisticServices.logisticServices.filter((service: any) => service === 'Đường hàng không').length / totalCount) * 100;
        let duongThuyNoiDiaCount = (logisticServices.logisticServices.filter((service: any) => service === 'Đường thuỷ nội địa').length / totalCount) * 100;
        let ketHopDaPhuongThucCount = (logisticServices.logisticServices.filter((service: any) => service === 'Kết hợp đa phương thức').length / totalCount) * 100;

        // Total %
        const totalPercentage =
            duongBoCount +
            duongSatCount +
            duongBienCount +
            duongHangKhongCount +
            duongThuyNoiDiaCount +
            ketHopDaPhuongThucCount;

        // Check Total %
        if (totalPercentage !== 100) {
            // change
            const adjustmentFactor = 100 / totalPercentage;
            duongBoCount *= adjustmentFactor;
            duongSatCount *= adjustmentFactor;
            duongBienCount *= adjustmentFactor;
            duongHangKhongCount *= adjustmentFactor;
            duongThuyNoiDiaCount *= adjustmentFactor;
            ketHopDaPhuongThucCount *= adjustmentFactor;
        }
        data = [
            Math.round(duongBoCount),
            Math.round(duongSatCount),
            Math.round(duongBienCount),
            Math.round(duongHangKhongCount),
            Math.round(duongThuyNoiDiaCount),
            Math.round(ketHopDaPhuongThucCount),
        ];
    }
    const options: ChartOptions<'bar'> = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Thống kê trong năm 2023',
            },
            datalabels: {
                anchor: 'center',
                align: 'center',
                color: 'white',
                formatter: (value: any) =>
                    `${value}%`,
            },
            tooltip: {
                callbacks: {
                    label(context: any) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += `${context.formattedValue}%`;
                        return label;
                    },
                },
            },
        },
        // scales: {
        //   x: {
        //     ticks: {
        //       callback(value) {
        //         return `${value}%`;
        //       },
        //     },
        //   },
        // },
    };
    const dataArcElement = {
        labels: ['Đường bộ', 'Đường sắt', 'Đường biển', 'Đường hàng không', 'Đường thuỷ nội địa', 'kết hợp đa phương thức'],
        datasets: [
            {
                data,
                backgroundColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                barThickness: 20,
            },
        ],
    };

    return (
        <>
            <h4 style={{marginTop: 50}}>
                4. Biểu đồ thể hiện tỷ lệ lựa chọn phương thức vận chuyển hàng hoá:
            </h4>
            <div style={{
                maxWidth: '800px',
                maxHeight: '300px'
            }}>
                <Bar options={options} data={dataArcElement} plugins={[ChartDataLabels]}/>
            </div>
        </>
    );
};

const Doituongkhaosat = (userPosition: PropChart) => {
    let data: number[] = [];
    let labels: string[] = [];
    if (userPosition && userPosition.doituongkhaosat) {
        const totalCount = userPosition.doituongkhaosat.length;
        let nhanvienCount = (userPosition.doituongkhaosat.filter((service: any) => service !== 'Tổng giám đốc / Giám đốc' && service !== 'Phó Tổng giám đốc / Phó giám đốc').length / totalCount) * 100;
        let lanhdaoCount = (userPosition.doituongkhaosat.filter((service: any) => service === 'Tổng giám đốc / Giám đốc' || service === 'Phó Tổng giám đốc / Phó giám đốc').length / totalCount) * 100;

        // Total %
        const totalPercentage =
            lanhdaoCount +
            nhanvienCount;
        // Check Total %
        if (totalPercentage !== 100) {
            // change
            const adjustmentFactor = 100 / totalPercentage;
            lanhdaoCount *= adjustmentFactor;
            nhanvienCount *= adjustmentFactor;
        }
        data = [
            Math.round(lanhdaoCount),
            Math.round(nhanvienCount),
        ];
        labels = ['Lãnh đạo (%)', 'Nhân viên (%)'];
    }
    const options: ChartOptions<'pie'> = {
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
            title: {
                display: true,
                text: 'Thống kê trong năm 2023',
            },
            datalabels: {
                formatter: (value: any) => `${value}%`,
                color: '#fff',
            },
            tooltip: {
                callbacks: {
                    label(context: any) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += `${context.formattedValue}%`;
                        return label;
                    },
                },
            },
        },
    };
    const dataArcElement = {
        labels,
        datasets: [
            {
                data,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <>
            <h4 style={{marginTop: 50}}>
                5. Biểu đồ thể hiện tỷ lệ đối tượng tham gia khảo sát trong doanh nghiệp:
            </h4>
            <div style={{
                maxWidth: '660px',
                maxHeight: '300px'
            }}>
                <Pie
                    style={{maxHeight: '300px'}}
                    options={options}
                    data={dataArcElement}
                />
            </div>
        </>
    );
};

const QuantityEmployees = (quantityEmployees: PropChart) => {
    let data: number[] = [];
    if (quantityEmployees && quantityEmployees.quantityEmployees) {
        const totalCount = quantityEmployees.quantityEmployees.length;
        let duoi30nguoi = (quantityEmployees.quantityEmployees.filter((service: any) => service === 'Dưới 30').length / totalCount) * 100;
        let tu30den50nguoi = ((quantityEmployees.quantityEmployees.filter((service: any) => service === '30-50').length / totalCount) * 100);
        let tu51den100nguoi = (quantityEmployees.quantityEmployees.filter((service: any) => service === '51-100').length / totalCount) * 100;
        let tu101den200nguoi = (quantityEmployees.quantityEmployees.filter((service: any) => service === '101-200').length / totalCount) * 100;
        let tu201den500nguoi = (quantityEmployees.quantityEmployees.filter((service: any) => service === '201-500').length / totalCount) * 100;
        let tu501den1000nguoi = (quantityEmployees.quantityEmployees.filter((service: any) => service === '501-1000').length / totalCount) * 100;
        let tu1001nguoi = (quantityEmployees.quantityEmployees.filter((service: any) => service === 'Từ 1001 trở lên').length / totalCount) * 100;

        // Total %
        const totalPercentage =
            duoi30nguoi +
            tu30den50nguoi +
            tu51den100nguoi +
            tu101den200nguoi +
            tu201den500nguoi +
            tu501den1000nguoi +
            tu1001nguoi;

        // Check Total %
        if (totalPercentage !== 100) {
            // change
            const adjustmentFactor = 100 / totalPercentage;
            duoi30nguoi *= adjustmentFactor;
            tu30den50nguoi *= adjustmentFactor;
            tu51den100nguoi *= adjustmentFactor;
            tu101den200nguoi *= adjustmentFactor;
            tu201den500nguoi *= adjustmentFactor;
            tu501den1000nguoi *= adjustmentFactor;
            tu1001nguoi *= adjustmentFactor;
        }
        data = [
            // Math.round(duoi30nguoi),
            // Math.round(tu30den50nguoi),
            // Math.round(tu51den100nguoi),
            // Math.round(tu101den200nguoi),
            // Math.round(tu201den500nguoi),
            // Math.round(tu501den1000nguoi),
            // Math.round(tu1001nguoi),
            parseFloat(duoi30nguoi.toFixed(1)),
            parseFloat(tu30den50nguoi.toFixed(1)),
            parseFloat(tu51den100nguoi.toFixed(1)),
            parseFloat(tu101den200nguoi.toFixed(1)),
            parseFloat(tu201den500nguoi.toFixed(1)),
            parseFloat(tu501den1000nguoi.toFixed(1)),
            parseFloat(tu1001nguoi.toFixed(1)),
        ];
    }

    const options: ChartOptions<'bar'> = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Thống kê trong năm 2023',
            },
            datalabels: {
                anchor: 'center',
                align: 'center',
                color: 'white',
                formatter: (value: any) =>
                    `${value}%`,
            },
            tooltip: {
                callbacks: {
                    label(context: any) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += `${context.formattedValue}%`;
                        return label;
                    },
                },
            },
        },
        // scales: {
        //   x: {
        //     ticks: {
        //       callback(value) {
        //         return `${value}%`;
        //       },
        //     },
        //   },
        // },
    };
    const dataArcElement = {
        labels: ['Dưới 30', '30-50', '51 - 100', '101 -200', '201 - 500', '501-1000', '1001 trở lên'],
        datasets: [
            {
                data,
                backgroundColor: [
                    'rgba(75, 192, 192, 1)',
                ],
                barThickness: 20,
            },
        ],
    };

    return (
        <>
            <h4 style={{marginTop: 50}}>
                6. Biểu đồ nguồn lao động tại doanh nghiệp sản xuất, kinh doanh tại tỉnh Hà Nam:
            </h4>
            <div style={{
                maxWidth: '800px',
                maxHeight: '300px'
            }}>
                <Bar options={options} data={dataArcElement} plugins={[ChartDataLabels]}/>
            </div>
        </>
    );
};

const LogisticExpense = (logisticExpense: PropChart) => {
    let data : number [] = [];
    if (logisticExpense && logisticExpense.logisticExpense) {
        const totalCount = logisticExpense.logisticExpense.length;
        let duoi10phantram = (logisticExpense.logisticExpense.filter((service: any) => service.includes('Dưới 10%')).length / totalCount) * 100;
        let tu10den15phantram = ((logisticExpense.logisticExpense.filter((service: any) => service.includes('10 – 15%')).length / totalCount) * 100);
        let tu16den20phantram = (logisticExpense.logisticExpense.filter((service: any) => service.includes('16 – 20%')).length / totalCount) * 100;
        let tren21phantram = (logisticExpense.logisticExpense.filter((service: any) => service.includes('Trên 21%')).length / totalCount) * 100;
        const totalPercentage =
            duoi10phantram +
            tu10den15phantram +
            tu16den20phantram +
            tren21phantram;

        // Check Total %
        if (totalPercentage !== 100) {
            // change
            const adjustmentFactor = 100 / totalPercentage;
            duoi10phantram *= adjustmentFactor;
            tu10den15phantram *= adjustmentFactor;
            tu16den20phantram *= adjustmentFactor;
            tren21phantram *= adjustmentFactor;
        }
        data = [
            Math.round(duoi10phantram),
            Math.round(tu10den15phantram),
            Math.round(tu16den20phantram),
            Math.round(tren21phantram),
        ];

    }

    const options: ChartOptions<'bar'> = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Thống kê trong năm 2023',
            },
            datalabels: {
                anchor: 'center',
                align: 'center',
                color: 'white',
                formatter: (value: any) =>
                    `${value}%`,
            },
            tooltip: {
                callbacks: {
                    label(context: any) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += `${context.formattedValue}%`;
                        return label;
                    },
                },
            },
        },
        // scales: {
        //     x: {
        //         ticks: {
        //             callback(value2) {
        //                 return `${value2}`;
        //             },
        //         },
        //     },
        // },
    };
    const dataArcElement = {
        labels: ['Dưới 10%', '10-15%', '16-20%', 'Trên 21%'],
        datasets: [
            {
                data,
                backgroundColor: [
                    'rgba(75, 192, 192, 1)',
                ],
                barThickness: 20,
            },
        ],
    };

    return (
        <>
            <h4 style={{marginTop: 50}}>
                7. Biểu đồ Chi phí logistics chiếm tỷ lệ trong doanh thu của doanh nghiệp sản xuất, kinh doanh:
            </h4>
            <div style={{
                maxWidth: '800px',
                maxHeight: '300px'
            }}>
                <Bar options={options} data={dataArcElement} plugins={[ChartDataLabels]}/>
            </div>
        </>
    );
};

const TransportationWays = (transportationWays: PropChart) => {
    let data : number [] = [];
    if (transportationWays && transportationWays.transportationWays) {
        const totalCount = transportationWays.transportationWays.length;
        // In ra totalCount
        let vantainoidia = (transportationWays.transportationWays.filter((service: any) => service.includes('Vận tải nội địa')).length / totalCount) * 100;
        let vantaiquocte = ((transportationWays.transportationWays.filter((service: any) => service.includes('Vận tải quốc tế')).length / totalCount) * 100);
        let khaibaohaiquan = (transportationWays.transportationWays.filter((service: any) => service.includes('Khai báo hải quan')).length / totalCount) * 100;
        let lamthutucnhapxuatkhau = (transportationWays.transportationWays.filter((service: any) => service.includes('Làm thủ tục xuất/nhập khẩu')).length / totalCount) * 100;
        let donggoihanghoa = (transportationWays.transportationWays.filter((service: any) => service.includes('Đóng gói hàng hoá')).length / totalCount) * 100;
        let xepdohanghoa = (transportationWays.transportationWays.filter((service: any) => service.includes('Xếp dỡ hàng hoá')).length / totalCount) * 100;
        let giaonhanhang = (transportationWays.transportationWays.filter((service: any) => service.includes('Giao nhận hàng hoá')).length / totalCount) * 100;
        let thumuanguyenvatlieu = (transportationWays.transportationWays.filter((service: any) => service.includes('Thu mua nguyên vật liệu')).length / totalCount) * 100;
        let dannhankymahieu = (transportationWays.transportationWays.filter((service: any) => service.includes('Dán nhãn, ký mã hiệu')).length / totalCount) * 100;
        let khongoaiquan = (transportationWays.transportationWays.filter((service: any) => service.includes('Kho ngoại quan')).length / totalCount) * 100;
        let quanlytonkho = (transportationWays.transportationWays.filter((service: any) => service.includes('Quản lý tồn kho')).length / totalCount) * 100;
        let quanlyhethongthongtin = (transportationWays.transportationWays.filter((service: any) => service.includes('Quản lý hệ thống thông tin')).length / totalCount) * 100;
        let phanphoi = (transportationWays.transportationWays.filter((service: any) => service.includes('Phân phối')).length / totalCount) * 100;
        let kiemtrachatluong = (transportationWays.transportationWays.filter((service: any) => service.includes('Kiểm tra chất lượng')).length / totalCount) * 100;
        let xulydonhang = (transportationWays.transportationWays.filter((service: any) => service.includes('Xử lý đơn hàng')).length / totalCount) * 100;
        let baohiemhanghoa = (transportationWays.transportationWays.filter((service: any) => service.includes('Bảo hiểm hàng hoá')).length / totalCount) * 100;
        let chuoicungung = (transportationWays.transportationWays.filter((service: any) => service.includes('Chuỗi cung ứng')).length / totalCount) * 100;
        let crossdocking = (transportationWays.transportationWays.filter((service: any) => service.includes('Cross-docking')).length / totalCount) * 100;
        let khong = (transportationWays.transportationWays.filter((service: any) => service.includes('không')).length / totalCount) * 100;
        let Khobai = (transportationWays.transportationWays.filter((service: any) => service.includes('Kho bãi')).length / totalCount) * 100;
        let haicham = (transportationWays.transportationWays.filter((service: any) => service.includes('..')).length / totalCount) * 100;
        let khachhang = (transportationWays.transportationWays.filter((service: any) => service.includes('Khách hàng')).length / totalCount) * 100;
        let dichvuhaiquan = (transportationWays.transportationWays.filter((service: any) => service.includes('Dịch vụ hải quan')).length / totalCount) * 100;
        let congtyxulinuocthai = (transportationWays.transportationWays.filter((service: any) => service.includes('Công ty xử lý nước thải')).length / totalCount) * 100;
        let Xaydungtruongmamnon = (transportationWays.transportationWays.filter((service: any) => service.includes('Xây dựng trường mầm non')).length / totalCount) * 100;
        let Xaydung = (transportationWays.transportationWays.filter((service: any) => service.includes('Xây dựng')).length / totalCount) * 100;
        let haucan = (transportationWays.transportationWays.filter((service: any) => service.includes('Hậu cần')).length / totalCount) * 100;
        let dichvutuvanlogicstic = (transportationWays.transportationWays.filter((service: any) => service.includes('Dịch vụ tư vấn logistics')).length / totalCount) * 100;
        let chisanxuatphutung = (transportationWays.transportationWays.filter((service: any) => service.includes('Chỉ sản xuất phụ tùng')).length / totalCount) * 100;
        let sanxuatphutung = (transportationWays.transportationWays.filter((service: any) => service.includes('Sản xuất phụ tùng')).length / totalCount) * 100;
        let khongsudung = (transportationWays.transportationWays.filter((service: any) => service.includes('Không sử dụng')).length / totalCount) * 100;
        // const totalPercentage =
        //     vantainoidia +
        //     vantaiquocte +
        //     khaibaohaiquan +
        //     lamthutucnhapxuatkhau +
        //     donggoihanghoa +
        //     xepdohanghoa +
        //     giaonhanhang +
        //     thumuanguyenvatlieu +
        //     dannhankymahieu +
        //     khongoaiquan +
        //     quanlytonkho +
        //     quanlyhethongthongtin +
        //     phanphoi +
        //     kiemtrachatluong +
        //     xulydonhang +
        //     baohiemhanghoa +
        //     chuoicungung +
        //     crossdocking +
        //     khong +
        //     Khobai +
        //     haicham +
        //     khachhang +
        //     dichvuhaiquan +
        //     congtyxulinuocthai +
        //     Xaydungtruongmamnon +
        //     Xaydung +
        //     haucan +
        //     dichvutuvanlogicstic +
        //     chisanxuatphutung +
        //     sanxuatphutung +
        //     khongsudung;
        //
        // // Check Total %
        // if (totalPercentage !== 100) {
        //     // change
        //     const adjustmentFactor = 100 / totalPercentage;
        //     vantainoidia *= adjustmentFactor;
        //     vantaiquocte *= adjustmentFactor;
        //     khaibaohaiquan *= adjustmentFactor;
        //     lamthutucnhapxuatkhau *= adjustmentFactor;
        //     donggoihanghoa *= adjustmentFactor;
        //     xepdohanghoa *= adjustmentFactor;
        //     giaonhanhang *= adjustmentFactor;
        //     thumuanguyenvatlieu *= adjustmentFactor;
        //     dannhankymahieu *= adjustmentFactor;
        //     khongoaiquan *= adjustmentFactor;
        //     quanlytonkho *= adjustmentFactor;
        //     quanlyhethongthongtin *= adjustmentFactor;
        //     phanphoi *= adjustmentFactor;
        //     kiemtrachatluong *= adjustmentFactor;
        //     xulydonhang *= adjustmentFactor;
        //     baohiemhanghoa *= adjustmentFactor;
        //     chuoicungung *= adjustmentFactor;
        //     crossdocking *= adjustmentFactor;
        //     khong *= adjustmentFactor;
        //     Khobai *= adjustmentFactor;
        //     haicham *= adjustmentFactor;
        //     khachhang *= adjustmentFactor;
        //     dichvuhaiquan *= adjustmentFactor;
        //     congtyxulinuocthai *= adjustmentFactor;
        //     Xaydungtruongmamnon *= adjustmentFactor;
        //     Xaydung *= adjustmentFactor;
        //     haucan *= adjustmentFactor;
        //     dichvutuvanlogicstic *= adjustmentFactor;
        //     chisanxuatphutung *= adjustmentFactor;
        //     sanxuatphutung *= adjustmentFactor;
        //     khongsudung *= adjustmentFactor;
        // }
        data = [
            parseFloat(vantainoidia.toFixed(1)),
            parseFloat(vantaiquocte.toFixed(1)),
            parseFloat(khaibaohaiquan.toFixed(1)),
            parseFloat(lamthutucnhapxuatkhau.toFixed(1)),
            parseFloat(donggoihanghoa.toFixed(1)),
            parseFloat(xepdohanghoa.toFixed(1)),
            parseFloat(giaonhanhang.toFixed(1)),
            parseFloat(thumuanguyenvatlieu.toFixed(1)),
            parseFloat(dannhankymahieu.toFixed(1)),
            parseFloat(khongoaiquan.toFixed(1)),
            parseFloat(quanlytonkho.toFixed(1)),
            parseFloat(quanlyhethongthongtin.toFixed(1)),
            parseFloat(phanphoi.toFixed(1)),
            parseFloat(kiemtrachatluong.toFixed(1)),
            parseFloat(xulydonhang.toFixed(1)),
            parseFloat(baohiemhanghoa.toFixed(1)),
            parseFloat(chuoicungung.toFixed(1)),
            parseFloat(crossdocking.toFixed(1)),
            parseFloat(khong.toFixed(1)),
            parseFloat(Khobai.toFixed(1)),
            parseFloat(haicham.toFixed(1)),
            parseFloat(khachhang.toFixed(1)),
            parseFloat(dichvuhaiquan.toFixed(1)),
            parseFloat(congtyxulinuocthai.toFixed(1)),
            parseFloat(Xaydungtruongmamnon.toFixed(1)),
            parseFloat(Xaydung.toFixed(1)),
            parseFloat(haucan.toFixed(1)),
            parseFloat(dichvutuvanlogicstic.toFixed(1)),
            parseFloat(chisanxuatphutung.toFixed(1)),
            parseFloat(sanxuatphutung.toFixed(1)),
            parseFloat(khongsudung.toFixed(1)),
        ];

    }

    const options: ChartOptions<'bar'> = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Thống kê trong năm 2023',
            },
            datalabels: {
                anchor: 'center',
                align: 'center',
                color: 'white',
                formatter: (value: any) =>
                    `${value}%`,

            },
            tooltip: {
                callbacks: {
                    label(context: any) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += `${context.formattedValue}%`;
                        return label;
                    },
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    max: 100,
                    callback(value) {
                        return `${value}%`;
                    },
                },
            },
        },
    };
    const dataArcElement = {
        labels: ['Vận tải nội địa', 'Vận tải quốc tế', 'Khai báo hải quan', 'Làm thủ tục xuất/nhập khẩu', 'Đóng gói hàng hóa', 'Xếp dỡ hàng hóa', 'Giao nhận hàng hóa', 'Thu mua nguyên vật liệu', 'Dán nhãn, ký mã hiệu', 'Kho ngoại quan', 'Quản lý tồn kho', 'Quản lý hệ thống thông tin', 'Phân phối', 'Kiểm tra chất lượng', 'Xử lý đơn hàng', 'Bảo hiểm hàng hóa', 'Chuỗi cung ứng', 'Cross-docking','Không', 'Kho bãi', 'Hải châm', 'Khách hàng', 'Dịch vụ hải quan', 'Công ty xử lý nước thải', 'Xây dựng trường mầm non', 'Xây dựng', 'Hậu cần', 'Dịch vụ tư vấn logistics', 'Chỉ sản xuất phụ tùng', 'Sản xuất phụ tùng', 'Không sử dụng'],
        datasets: [
            {
                data,
                backgroundColor: [
                    'rgba(75, 192, 192, 1)',
                ],
                barThickness: 20,
            },
        ],
    };

    return (
        <>
            <h4 style={{marginTop: 50}}>
                7. Biểu đồ Những dịch vụ logistics đang được doanh nghiệp sản xuất sử dụng:
            </h4>
            <div style={{
                // maxWidth: '2400px',
                maxHeight: '800px'
            }}>
                <Bar options={options} data={dataArcElement} plugins={[ChartDataLabels]}/>
            </div>
        </>
    );
};


const ImportantFactor = (importantFactor: PropChart) => {
    let data : number [] = [];
    if (importantFactor && importantFactor.importantFactors) {
        const totalCount = importantFactor.importantFactors.length;
        // In ra totalCount
        let chinhsachthue = (importantFactor.importantFactors.filter((service: any) => service.includes('Chính sách thuế')).length / totalCount) * 100;
        let thutuchaiquan = ((importantFactor.importantFactors.filter((service: any) => service.includes('Thủ tục hải quan')).length / totalCount) * 100);
        let hanhlangphaply = (importantFactor.importantFactors.filter((service: any) => service.includes('Hành lang pháp lý')).length / totalCount) * 100;
        let cosohatang = (importantFactor.importantFactors.filter((service: any) => service.includes('Cơ sở hạ tầng')).length / totalCount) * 100;
        let thutuchanhchinh = (importantFactor.importantFactors.filter((service: any) => service.includes('Thủ tục hành chính')).length / totalCount) * 100;
        let chuyendoiso = (importantFactor.importantFactors.filter((service: any) => service.includes('Chuyển đổi số')).length / totalCount) * 100;
        let daotaonhanluc = (importantFactor.importantFactors.filter((service: any) => service.includes('Đào tạo nhân lực')).length / totalCount) * 100;
        let khong = (importantFactor.importantFactors.filter((service: any) => service.includes('không')).length / totalCount) * 100;
        let haicham = (importantFactor.importantFactors.filter((service: any) => service.includes('..')).length / totalCount) * 100;
        let none = (importantFactor.importantFactors.filter((service: any) => service === '').length / totalCount) * 100;
        let vitridialitangcuonghoptac = (importantFactor.importantFactors.filter((service: any) => service.includes('Vị trí địa lý, tăng cường hợp tác')).length / totalCount) * 100;
        let cosohatanglayeutovocungquantrong = (importantFactor.importantFactors.filter((service: any) => service.includes('Cơ sở hạ tầng là yếu tố vô cùng quan trọng để ngành logistics phát triển')).length / totalCount) * 100;
        let khongsanxuathanghoa = (importantFactor.importantFactors.filter((service: any) => service.includes('không sản xuất hàng hóa cụ thể')).length / totalCount) * 100;
        let xaydungtruongmamnon = (importantFactor.importantFactors.filter((service: any) => service.includes('Xây dựng trường mầm non tư thục và phòng khám đa khoa')).length / totalCount) * 100;
        let tatcacacytren = (importantFactor.importantFactors.filter((service: any) => service.includes('Tất cả ý trên')).length / totalCount) * 100;
        let hanamlacosohatang = (importantFactor.importantFactors.filter((service: any) => service.includes('Hà Nam cơ sở hạ tầng vẫn chưa phát triển')).length / totalCount) * 100;
        let hanamcandautu = (importantFactor.importantFactors.filter((service: any) => service.includes('Hà Nam cần đầu tư nhiều hơn về cơ sở hạ tầng')).length / totalCount) * 100;
        let tatca = (importantFactor.importantFactors.filter((service: any) => service.includes('Tất cả')).length / totalCount) * 100;
        let tangcuonghoptacquocte = (importantFactor.importantFactors.filter((service: any) => service.includes('Tăng cường hợp tác quốc tế')).length / totalCount) * 100;

        console.log(thutuchaiquan);
        data = [
            parseFloat(chinhsachthue.toFixed(1)),
            parseFloat(thutuchaiquan.toFixed(1)),
            parseFloat(hanhlangphaply.toFixed(1)),
            parseFloat(cosohatang.toFixed(1)),
            parseFloat(thutuchanhchinh.toFixed(1)),
            parseFloat(chuyendoiso.toFixed(1)),
            parseFloat(daotaonhanluc.toFixed(1)),
            parseFloat(khong.toFixed(1)),
            parseFloat(haicham.toFixed(1)),
            parseFloat(none.toFixed(1)),
            parseFloat(vitridialitangcuonghoptac.toFixed(1)),
            parseFloat(cosohatanglayeutovocungquantrong.toFixed(1)),
            parseFloat(khongsanxuathanghoa.toFixed(1)),
            parseFloat(xaydungtruongmamnon.toFixed(1)),
            parseFloat(tatcacacytren.toFixed(1)),
            parseFloat(hanamlacosohatang.toFixed(1)),
            parseFloat(hanamcandautu.toFixed(1)),
            parseFloat(tatca.toFixed(1)),
            parseFloat(tangcuonghoptacquocte.toFixed(1)),
        ];

    }

    const options: ChartOptions<'bar'> = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Thống kê trong năm 2023',
            },
            datalabels: {
                anchor: 'center',
                align: 'center',
                color: 'white',
                formatter: (value: any) =>
                    `${value}%`,

            },
            tooltip: {
                callbacks: {
                    label(context: any) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += `${context.formattedValue}%`;
                        return label;
                    },
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    max: 100,
                    callback(value) {
                        return `${value}%`;
                    },
                },
            },
        },
    };
    const dataArcElement = {
        labels: ['Chính sách thuế', 'Thủ tục hải quan', 'Hành lang pháp lý', 'Cơ sở hạ tầng', 'Thủ tục hành chính', 'Chuyển đổi số', 'Đào tạo nhân lực', 'Không', 'Hải châm', '', 'Vị trí địa lý, tăng cường hợp tác', 'Cơ sở hạ tầng là yếu tố vô cùng quan trọng để ngành logistics phát triển', 'Không sản xuất hàng hóa cụ thể', 'Xây dựng trường mầm non tư thục và phòng khám đa khoa', 'Tất cả ý trên', 'Hà Nam cơ sở hạ tầng vẫn chưa phát triển', 'Hà Nam cần đầu tư nhiều hơn về cơ sở hạ tầng', 'Tất cả', 'Tăng cường hợp tác quốc tế'],
        datasets: [
            {
                data,
                backgroundColor: [
                    'rgba(75, 192, 192, 1)',
                ],
                barThickness: 20,
            },
        ],
    };

    return (
        <>
            <h4 style={{marginTop: 50}}>
                7. Biểu đồ Các yếu tố phát triển dịch vụ logistics tại Tỉnh Hà Nam:
            </h4>
            <div style={{
                // maxWidth: '2400px',
                maxHeight: '800px'
            }}>
                <Bar options={options} data={dataArcElement} plugins={[ChartDataLabels]}/>
            </div>
        </>
    );
};

const QuantityEmployees_0 = (quantityEmployees_0: PropChart) => {
    let data : number [] = [];
    if (quantityEmployees_0 && quantityEmployees_0.quantityEmployees_0) {
        const totalCount = quantityEmployees_0.quantityEmployees_0.length;
        // In ra totalCount
        let duoi50nguoi = (quantityEmployees_0.quantityEmployees_0.filter((service: any) => service.includes('Dưới 50')).length / totalCount) * 100;
        let tu51den100nguoi = ((quantityEmployees_0.quantityEmployees_0.filter((service: any) => service.includes('51-100')).length / totalCount) * 100);
        let tu101den200nguoi = (quantityEmployees_0.quantityEmployees_0.filter((service: any) => service.includes('101-200')).length / totalCount) * 100;
        let tu201den500nguoi = (quantityEmployees_0.quantityEmployees_0.filter((service: any) => service.includes('201-500')).length / totalCount) * 100;
        let tu501den1000nguoi = (quantityEmployees_0.quantityEmployees_0.filter((service: any) => service.includes('501-1000')).length / totalCount) * 100;
        let tu1001den2000nguoi = (quantityEmployees_0.quantityEmployees_0.filter((service: any) => service.includes('1001-2000')).length / totalCount) * 100;
        let tren2000nguoi = (quantityEmployees_0.quantityEmployees_0.filter((service: any) => service.includes('2001 trở lên')).length / totalCount) * 100;

        const totalPercentage =
            duoi50nguoi +
            tu51den100nguoi +
            tu101den200nguoi +
            tu201den500nguoi +
            tu501den1000nguoi +
            tu1001den2000nguoi +
            tren2000nguoi;

        if(totalPercentage !== 100) {
            const adjustmentFactor = 100 / totalPercentage;
            duoi50nguoi *= adjustmentFactor;
            tu51den100nguoi *= adjustmentFactor;
            tu101den200nguoi *= adjustmentFactor;
            tu201den500nguoi *= adjustmentFactor;
            tu501den1000nguoi *= adjustmentFactor;
            tu1001den2000nguoi *= adjustmentFactor;
            tren2000nguoi *= adjustmentFactor;
        }

        data = [
            parseFloat(duoi50nguoi.toFixed(1)),
            parseFloat(tu51den100nguoi.toFixed(1)),
            parseFloat(tu101den200nguoi.toFixed(1)),
            parseFloat(tu201den500nguoi.toFixed(1)),
            parseFloat(tu501den1000nguoi.toFixed(1)),
            parseFloat(tu1001den2000nguoi.toFixed(1)),
            parseFloat(tren2000nguoi.toFixed(1)),
        ];

    }

    const options: ChartOptions<'bar'> = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Thống kê trong năm 2023',
            },
            datalabels: {
                anchor: 'center',
                align: 'center',
                color: 'white',
                formatter: (value: any) =>
                    `${value}%`,

            },
            tooltip: {
                callbacks: {
                    label(context: any) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += `${context.formattedValue}%`;
                        return label;
                    },
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    max: 100,
                    callback(value) {
                        return `${value}%`;
                    },
                },
            },
        },
    };
    const dataArcElement = {
        labels: ['Dưới 50', '51 - 100', '101 - 200', '201 - 500', '501 - 1000', '1001 - 2000', '2001 trở lên'],
        datasets: [
            {
                data,
                backgroundColor: [
                    'rgba(75, 192, 192, 1)',
                ],
                barThickness: 20,
            },
        ],
    };

    return (
        <>
            <h4 style={{marginTop: 50}}>
                8. Biểu đồ thể hiện số lượng nhân viên trong doanh nghiệp vận tải:
            </h4>
            <div style={{
                maxWidth: '800px',
                maxHeight: '300px'
            }}>
                <Bar options={options} data={dataArcElement} plugins={[ChartDataLabels]}/>
            </div>
        </>
    );
};

const LogisticServices_1 = (logisticServices_1: PropChart) => {
    let data : number [] = [];
    if (logisticServices_1 && logisticServices_1.logisticServices_1) {
        const totalCount = logisticServices_1.logisticServices_1.length;
        // In ra totalCount
        let detmay = (logisticServices_1.logisticServices_1.filter((service: any) => service.includes('Dệt may')).length / totalCount) * 100;
        let thuysan = ((logisticServices_1.logisticServices_1.filter((service: any) => service.includes('Thủy sản')).length / totalCount) * 100);
        let nongsan = (logisticServices_1.logisticServices_1.filter((service: any) => service.includes('Nông sản')).length / totalCount) * 100;
        let dienthoaicacloaivalinhkien =  (logisticServices_1.logisticServices_1.filter((service: any) => service.includes('Điện thoại các loại và linh kiện')).length / totalCount) * 100;
        let mayvitinhsanphamdientuvalinhkien = (logisticServices_1.logisticServices_1.filter((service: any) => service.includes('Máy vi tính, sản phẩm điện tử và linh kiện')).length / totalCount) * 100;
        let dagiaytuisach = (logisticServices_1.logisticServices_1.filter((service: any) => service.includes('Da giày, túi xách')).length / totalCount) * 100;
        let thep = (logisticServices_1.logisticServices_1.filter((service: any) => service.includes('Thép')).length / totalCount) * 100;
        let nhuavasanphamtunhua = (logisticServices_1.logisticServices_1.filter((service: any) => service.includes('Nhựa và sản phẩm từ nhựa')).length / totalCount) * 100;
        let maymocthietbiphutungkhac = (logisticServices_1.logisticServices_1.filter((service: any) => service.includes('Máy móc, thiết bị và phụ tùng khác')).length / totalCount) * 100;
        let govasanphamtugo = (logisticServices_1.logisticServices_1.filter((service: any) => service.includes('Gỗ và sản phẩm từ gỗ')).length / totalCount) * 100;
        let than = (logisticServices_1.logisticServices_1.filter((service: any) => service.includes('Than')).length / totalCount) * 100;
        let xangdauvacacloainhienlieukhac = (logisticServices_1.logisticServices_1.filter((service: any) => service.includes('Xăng dầu và các loại nhiên liệu khác')).length / totalCount) * 100;
        let vatphamvanhoagiaoduc = (logisticServices_1.logisticServices_1.filter((service: any) => service.includes('Vật phẩm, văn hóa, giáo dục')).length / totalCount) * 100;
        let sanphamhoachat = (logisticServices_1.logisticServices_1.filter((service: any) => service.includes('Sản phẩm hóa chất')).length / totalCount) * 100;
        let sanphamdouong = (logisticServices_1.logisticServices_1.filter((service: any) => service.includes('Sản phẩm đồ uống')).length / totalCount) * 100;
        let cham = (logisticServices_1.logisticServices_1.filter((service: any) => service.includes('.')).length / totalCount) * 100;

        data = [
            parseFloat(detmay.toFixed(1)),
            parseFloat(thuysan.toFixed(1)),
            parseFloat(nongsan.toFixed(1)),
            parseFloat(dienthoaicacloaivalinhkien.toFixed(1)),
            parseFloat(mayvitinhsanphamdientuvalinhkien.toFixed(1)),
            parseFloat(dagiaytuisach.toFixed(1)),
            parseFloat(cham.toFixed(1)),
            parseFloat(thep.toFixed(1)),
            parseFloat(nhuavasanphamtunhua.toFixed(1)),
            parseFloat(maymocthietbiphutungkhac.toFixed(1)),
            parseFloat(govasanphamtugo.toFixed(1)),
            parseFloat(than.toFixed(1)),
            parseFloat(xangdauvacacloainhienlieukhac.toFixed(1)),
            parseFloat(vatphamvanhoagiaoduc.toFixed(1)),
            parseFloat(sanphamhoachat.toFixed(1)),
            parseFloat(sanphamdouong.toFixed(1)),
        ];

    }

    const options: ChartOptions<'bar'> = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Thống kê trong năm 2023',
            },
            datalabels: {
                anchor: 'center',
                align: 'center',
                color: 'white',
                formatter: (value: any) =>
                    `${value}%`,

            },
            tooltip: {
                callbacks: {
                    label(context: any) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += `${context.formattedValue}%`;
                        return label;
                    },
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    max: 100,
                    callback(value) {
                        return `${value}%`;
                    },
                },
            },
        },
    };
    const dataArcElement = {
        labels: ['Dệt may', 'Thủy sản', 'Nông sản', 'Điện thoại các loại và linh kiện', 'Máy vi tính, sản phẩm điện tử và linh kiện', 'Da giày, túi sách','.', 'Thép', 'Nhựa và sản phẩm từ nhựa', 'Máy móc, thiết bị và phụ tùng khác', 'Gỗ và sản phẩm từ gỗ', 'Than', 'Xăng dầu và các loại nhiên liệu khác', 'Vật phẩm, văn hóa, giáo dục', 'Sản phẩm hóa chất', 'Sản phẩm đồ uống'],
        datasets: [
            {
                data,
                backgroundColor: [
                    'rgba(75, 192, 192, 1)',
                ],
                barThickness: 20,
            },
        ],
    };

    return (
        <>
            <h4 style={{marginTop: 50}}>
                9. Biểu đồ thể hiện tỷ lệ loại hàng hóa các công ty logicstic chuyên vận chuyển:
            </h4>
            <div style={{
                // maxWidth: '800px',
                maxHeight: '800px'
            }}>
                <Bar options={options} data={dataArcElement} plugins={[ChartDataLabels]}/>
            </div>
        </>
    );
};

const LogisticServices_Xep = (logisticServices_Xep: PropChart) => {
    let data: number[] = [];
    let labels: string[] = [];
    if (logisticServices_Xep && logisticServices_Xep.logisticServices_Xep) {
        const totalCount = logisticServices_Xep.logisticServices_Xep.length;
        let coCount = (logisticServices_Xep.logisticServices_Xep.filter((service: any) => service.includes('Xếp dỡ hàng hóa')).length / totalCount) * 100;
        let khongCount = ((logisticServices_Xep.logisticServices_Xep.filter((service: any) => !service.includes('Xếp dỡ hàng hóa')).length / totalCount) * 100);

        // Total %
        const totalPercentage =
            khongCount +
            coCount;
        // Check Total %
        if (totalPercentage !== 100) {
            // change
            const adjustmentFactor = 100 / totalPercentage;
            khongCount *= adjustmentFactor;
            coCount *= adjustmentFactor;
        }
        data = [
            Math.round(khongCount),
            Math.round(coCount),
        ];
        labels = ['Không (%)', 'Có (%)'];
    }

    const options: ChartOptions<'pie'> = {
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
            title: {
                display: true,
                text: 'Thống kê trong năm 2023',
            },
            datalabels: {
                formatter: (value: any) => `${value}%`,
                color: '#fff',
            },
            tooltip: {
                callbacks: {
                    label(context: any) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += `${context.formattedValue}%`;
                        return label;
                    },
                },
            },
        },
    };
    const dataArcElement = {
        labels,
        datasets: [
            {
                data,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <h4 style={{marginTop: 50}}>
                10. Kết quả khảo sát doanh nghiệp vận tải cung cấp dịch vụ xếp dỡ hàng hoá:
            </h4>
            <div style={{
                maxWidth: '660px',
                maxHeight: '300px'
            }}>
                <Pie
                    style={{maxHeight: '300px'}}
                    options={options}
                    data={dataArcElement}
                />
            </div>
        </>
    );
};




export {
    TransportationServices,
    IsSelfLogistic,
    QuantityLogisticEmployees,
    LogisticServices,
    Doituongkhaosat,
    QuantityEmployees,
    LogisticExpense,
    TransportationWays,
    ImportantFactor,
    QuantityEmployees_0,
    LogisticServices_1,
    LogisticServices_Xep,
};
