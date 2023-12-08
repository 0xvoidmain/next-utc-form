'use client';

import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Group,
  Radio,
  Space,
  Text,
  TextInput,
  rem,
} from '@mantine/core';
import React from 'react';
import cx from 'clsx';
import { useForm } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';
import globalCss from '../../styles/global.module.css';

const ManufacturingEnterpriseForm = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const form = useForm({
    initialValues: {
      nameEnterprise: '',
      addressEnterprise: '',
      userName: '',
      phone: '',
      email: '',
      userPosition: '',
      kindOfEnterprise: '',
      kindOfProduct: [],
      quantityEmployees: '',
      quantityLogisticEmployees: '',
      businessEnterprise: '',
      annualRevenue: '',
      logisticExpense: '',
      feedbackLogisticExpense: '',
      logisticServices: [],
      transportationWays: [],
      isSelfLogistic: '',
      logisticServiceProvider: '',
      cdtIncotermsImport: [],
      cdtIncotermsExport: [],
      fromLocation: '',
      toLocation: '',
      forecastingLogisticsNeeds: '',
      serviceNeedsImproved: '',
      serviceNeedsAdd: '',
      importantFactor: [],
    },

    validate: {
      nameEnterprise: (value) => (value ? null : 'Required'),
      addressEnterprise: (value) => (value ? null : 'Required'),
      userName: (value) => (value ? null : 'Required'),
      phone: (value) => (value ? null : 'Required'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      userPosition: (value) => (value ? null : 'Required'),
      kindOfProduct: (value) => (value.length > 0 ? null : 'Required'),
      kindOfEnterprise: (value) => (value ? null : 'Required'),
      quantityEmployees: (value) => (value ? null : 'Required'),
      quantityLogisticEmployees: (value) => (value ? null : 'Required'),
      businessEnterprise: (value) => (value ? null : 'Required'),
      annualRevenue: (value) => (value ? null : 'Required'),
      logisticExpense: (value) => (value ? null : 'Required'),
      feedbackLogisticExpense: (value) => (value ? null : 'Required'),
      isSelfLogistic: (value) => (value ? null : 'Required'),
      logisticServiceProvider: (value) => (value ? null : 'Required'),
      logisticServices: (value) => (value.length > 0 ? null : 'Required'),
      transportationWays: (value) => (value.length > 0 ? null : 'Required'),
      importantFactor: (value) => (value.length > 0 ? null : 'Required'),
      fromLocation: (value) => (value ? null : 'Required'),
      toLocation: (value) => (value ? null : 'Required'),
      forecastingLogisticsNeeds: (value) => (value ? null : 'Required'),
      serviceNeedsImproved: (value) => (value ? null : 'Required'),
      serviceNeedsAdd: (value) => (value ? null : 'Required'),
    },
  });
  return (
    <Container pb={rem(isMobile ? 50 : 100)} pt={rem(50)}>
      <Flex align="center" justify="center" mb={30}>
        <Text className={cx(globalCss.title, globalCss.bold, globalCss.textCenter)}>
          PHIẾU KHẢO SÁT CÁC DOANH NGHIỆP SẢN XUẤT, KINH DOANH TRÊN ĐỊA BÀN TỈNH HÀ NAM
        </Text>
      </Flex>
      {/* <Text className={globalCss.text}>Kính thưa Anh/Chị!</Text>
      <Text className={globalCss.text}>
        Chúng tôi là một nhóm nghiên cứu về dịch vụ logistics của Trường Đại học Giao thông vận tải.
        Đề tài nghiên cứu cấp Tỉnh của chúng tôi là “Giải pháp phát triển dịch vụ Logistics tại Tỉnh
        Hà Nam”. Nhóm nghiên cứu tiến hành khảo sát này nhằm thu thập thông tin, dữ liệu của các
        doanh nghiệp sản xuất, kinh doanh sử dụng dịch vụ logistics trên địa bàn Tỉnh Hà Nam. Kết
        quả khảo sát góp phần quan trọng trong việc hoàn thành đề tài. Mọi thông tin cung cấp trong
        khảo sát này chỉ dùng cho mục đích nghiên cứu. Nhóm nghiên cứu chân thành cảm ơn và hoan
        nghênh mọi ý kiến đóng góp, mọi sự hợp tác của Quý Anh/Chị, đồng thời cam kết bảo mật thông
        tin của người tham gia khảo sát.
      </Text>
      <Text className={globalCss.text}>Để trả lời đầy đủ Phiếu hỏi sẽ cần khoảng 15 phút.</Text>
      <Text className={globalCss.text}>Chân thành cảm ơn sự hợp tác của Quý Anh/Chị.</Text> */}
      <Space h="xl" />

      <form onSubmit={form.onSubmit((values) => console.log(values, '==================='))}>
        <Text className={cx(globalCss.text, globalCss.bold)}>1. Thông tin chung về công ty</Text>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>1.1. Tên công ty của Anh/Chị?</Text>
          <TextInput
            withAsterisk
            label="Tên công ty"
            placeholder="Tên công ty"
            {...form.getInputProps('nameEnterprise')}
          />
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            1.2. Địa chỉ công ty của Anh/Chị?
          </Text>
          <TextInput
            withAsterisk
            label="Địa chỉ công ty"
            placeholder="Địa chỉ công ty"
            {...form.getInputProps('addressEnterprise')}
          />
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            1.3. Họ và tên người thực hiện khảo sát:
          </Text>
          <TextInput
            withAsterisk
            label="Họ và tên"
            placeholder="Họ và tên"
            {...form.getInputProps('userName')}
          />
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>1.4. Số điện thoại liên hệ:</Text>
          <TextInput
            withAsterisk
            label="Số điện thoại"
            placeholder="Số điện thoại"
            {...form.getInputProps('phone')}
          />
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>1.5. Địa chỉ Email:</Text>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="Email"
            {...form.getInputProps('email')}
          />
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            1.6. Chức vụ hoặc vị trí công việc của Anh/Chị trong doanh nghiệp?
          </Text>
          <Radio.Group
            label="Chức vụ hoặc vị trí công việc"
            withAsterisk
            {...form.getInputProps('userPosition')}
          >
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Radio value="Tổng giám đốc / Giám đốc" label="Tổng giám đốc / Giám đốc" />
              <Radio
                value="Phó Tổng giám đốc / Phó giám đốc"
                label="Phó Tổng giám đốc / Phó giám đốc"
              />
              <Radio value="Trưởng phòng" label="Trưởng phòng" />
              <Radio value="Phó phòng" label="Phó phòng" />
              <Radio value="Trưởng nhóm" label="Trưởng nhóm" />
              <Radio value="Nhân viên" label="Nhân viên" />
              <Radio value="Mục khác:" label="Mục khác:" />
            </Flex>
          </Radio.Group>
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>1.7. Loại hình công ty:</Text>
          <Radio.Group
            label="Loại hình công ty"
            withAsterisk
            {...form.getInputProps('kindOfEnterprise')}
          >
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Radio value="Công ty TNHH" label="Công ty TNHH" />
              <Radio value="Công ty nhà nước" label="Công ty nhà nước" />
              <Radio value="Công ty cổ phần" label="Công ty cổ phần" />
              <Radio value="Doanh nghiệp tư nhân" label="Doanh nghiệp tư nhân" />
              <Radio value="Công ty liên doanh" label="Công ty liên doanh" />
              <Radio value="Công ty nước ngoài (100%)" label="Công ty nước ngoài (100%)" />
            </Flex>
          </Radio.Group>
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            1.8. Loại hàng hoá mà công ty đang sản xuất, kinh doanh?
          </Text>
          <Checkbox.Group
            label="Loại hàng hoá"
            withAsterisk
            {...form.getInputProps('kindOfProduct')}
          >
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Checkbox value="Dệt may" label="Dệt may" />
              <Checkbox value="Thuỷ sản" label="Thuỷ sản" />
              <Checkbox value="Nông sản" label="Nông sản" />
              <Checkbox
                value="Điện thoại các loại và linh kiện"
                label="Điện thoại các loại và linh kiện"
              />
              <Checkbox
                value="Máy vi tính, sản phẩm điện tử và linh kiện"
                label="Máy vi tính, sản phẩm điện tử và linh kiện"
              />
              <Checkbox value="Da giày, túi xách" label="Da giày, túi xách" />
              <Checkbox value="Thép" label="Thép" />
              <Checkbox value="Nhựa và sản phẩm từ nhựa" label="Nhựa và sản phẩm từ nhựa" />
              <Checkbox
                value="Máy móc, thiết bị và phụ tùng khác"
                label="Máy móc, thiết bị và phụ tùng khác"
              />
              <Checkbox value="Gỗ và sản phẩm từ gỗ" label="Gỗ và sản phẩm từ gỗ" />
              <Checkbox value="Than" label="Than" />
              <Checkbox
                value="Xăng dầu và các loại nhiên liệu khác"
                label="Xăng dầu và các loại nhiên liệu khác"
              />
              <Checkbox value="Vật phẩm, văn hoá, giáo dục" label="Vật phẩm, văn hoá, giáo dục" />
              <Checkbox value="Sản phẩm hoá chất" label="Sản phẩm hoá chất" />
              <Checkbox value="Sản xuất đồ uống" label="Sản xuất đồ uống" />
              <Checkbox value="Mục khác:" label="Mục khác:" />
            </Flex>
          </Checkbox.Group>
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            1.9. Số lượng nhân viên của công ty Anh/Chị?
          </Text>
          <Radio.Group
            label="Số lượng nhân viên"
            withAsterisk
            {...form.getInputProps('quantityEmployees')}
          >
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Radio value="Dưới 30" label="Dưới 30" />
              <Radio value="30 – 50" label="30 – 50" />
              <Radio value="51 – 100" label="51 – 100" />
              <Radio value="101 – 200" label="101 – 200" />
              <Radio value="201 – 500" label="201 – 500" />
              <Radio value="501 – 1000" label="501 – 1000" />
              <Radio value="Từ 1001 trở lên" label="Từ 1001 trở lên" />
            </Flex>
          </Radio.Group>
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            1.10. Số nhân viên có chuyên môn nghiệp vụ về logistics của công ty Anh/Chị:
          </Text>
          <Radio.Group
            label="Số lượng nhân viên"
            withAsterisk
            {...form.getInputProps('quantityLogisticEmployees')}
          >
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Radio value="Không có" label="Không có" />
              <Radio value="1 - 10 người" label="1 - 10 người" />
              <Radio value="11 - 20 người" label="11 - 20 người" />
              <Radio value="Trên 21 người" label="Trên 21 người" />
            </Flex>
          </Radio.Group>
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            1.11. Công ty của Anh/Chị là doanh nghiệp:
          </Text>
          <Radio.Group
            label="Mô hình doanh nghiệp"
            withAsterisk
            {...form.getInputProps('businessEnterprise')}
          >
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Radio
                value="Sản xuất, kinh doanh hàng hoá trong nước"
                label="Sản xuất, kinh doanh hàng hoá trong nước"
              />
              <Radio
                value="Mua hàng từ nước ngoài và bán hàng trong nước"
                label="Mua hàng từ nước ngoài và bán hàng trong nước"
              />
              <Radio
                value="Sản xuất hàng trong nước và bán ra nước ngoài"
                label="Sản xuất hàng trong nước và bán ra nước ngoài"
              />
              <Radio
                value="Mua hàng từ nước ngoài và bán ra nước ngoài"
                label="Mua hàng từ nước ngoài và bán ra nước ngoài"
              />
            </Flex>
          </Radio.Group>
        </Box>

        <Space h="xl" />

        <Text className={cx(globalCss.text, globalCss.bold)}>
          2. Thông tin về tình hình sử dụng dịch vụ logistics của công ty Anh/Chị
        </Text>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            2.1. Doanh thu trung bình hàng năm của công ty Anh /Chị:
          </Text>
          <Radio.Group
            label="Doanh thu trung bình hàng năm"
            withAsterisk
            {...form.getInputProps('annualRevenue')}
          >
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Radio value="Dưới 5 tỷ đồng" label="Dưới 5 tỷ đồng" />
              <Radio value="5 - 10 tỷ đồng" label="5 - 10 tỷ đồng" />
              <Radio value="11 - 20 tỷ đồng" label="11 - 20 tỷ đồng" />
              <Radio value="21 - 50 tỷ đồng" label="21 - 50 tỷ đồng" />
              <Radio value="51 - 100 tỷ đồng" label="51 - 100 tỷ đồng" />
              <Radio value="Từ 101 tỷ đồng trở lên" label="Từ 101 tỷ đồng trở lên" />
            </Flex>
          </Radio.Group>
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            2.2. Chi phí logistics chiếm bao nhiêu % doanh thu của công ty Anh/Chị?
          </Text>
          <Radio.Group
            label="Chi phí logistics"
            withAsterisk
            {...form.getInputProps('logisticExpense')}
          >
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Radio value="Dưới 10%" label="Dưới 10%" />
              <Radio value="10 – 15%" label="10 – 15%" />
              <Radio value="16 – 20%" label="16 – 20%" />
              <Radio value="Trên 21%" label="Trên 21%" />
            </Flex>
          </Radio.Group>
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            2.3. Đánh giá về chi phí logistics mà công ty Anh/Chị phải trả là:
          </Text>
          <Radio.Group
            label="Đánh giá"
            withAsterisk
            {...form.getInputProps('feedbackLogisticExpense')}
          >
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Radio value="Rất cao" label="Rất cao" />
              <Radio value="Cao" label="Cao" />
              <Radio value="Trung bình" label="Trung bình" />
              <Radio value="Thấp" label="Thấp" />
              <Radio value="Rất thấp" label="Rất thấp" />
            </Flex>
          </Radio.Group>
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            2.4. Công ty Anh/Chị lựa chọn vận chuyển hàng hoá bằng phương thức vận tải nào?
          </Text>
          <Checkbox.Group
            label="Phương thức vận tải"
            withAsterisk
            {...form.getInputProps('transportationWays')}
          >
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Checkbox value="Đường bộ" label="Đường bộ" />
              <Checkbox value="Đường sắt" label="Đường sắt" />
              <Checkbox value="Đường biển" label="Đường biển" />
              <Checkbox value="Đường hàng không" label="Đường hàng không" />
              <Checkbox value="Đường thuỷ nội địa" label="Đường thuỷ nội địa" />
              <Checkbox value="Kết hợp đa phương thức" label="Kết hợp đa phương thức" />
            </Flex>
          </Checkbox.Group>
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            2.5. Công ty Anh/Chị thường xuyên sử dụng những dịch vụ logistics nào sau đây? (lựa chọn
            nhiều phương án khác nhau)
          </Text>
          <Checkbox.Group
            label="Dịch vụ logistics"
            withAsterisk
            {...form.getInputProps('logisticServices')}
          >
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Checkbox value="Vận tải nội địa" label="Vận tải nội địa" />
              <Checkbox value="Vận tải quốc tế" label="Vận tải quốc tế" />
              <Checkbox value="Khai báo hải quan" label="Khai báo hải quan" />
              <Checkbox value="Làm thủ tục xuất/nhập khẩu" label="Làm thủ tục xuất/nhập khẩu" />
              <Checkbox value="Đóng gói hàng hoá" label="Đóng gói hàng hoá" />
              <Checkbox value="Xếp dỡ hàng hoá" label="Xếp dỡ hàng hoá" />
              <Checkbox value="Giao nhận hàng hoá" label="Giao nhận hàng hoá" />
              <Checkbox value="Thu mua nguyên vật liệu" label="Thu mua nguyên vật liệu" />
              <Checkbox value="Dán nhãn, ký mã hiệu" label="Dán nhãn, ký mã hiệu" />
              <Checkbox value="Kho ngoại quan" label="Kho ngoại quan" />
              <Checkbox value="Quản lý tồn kho" label="Quản lý tồn kho" />
              <Checkbox value="Quản lý hệ thống thông tin" label="Quản lý hệ thống thông tin" />
              <Checkbox value="Phân phối" label="Phân phối" />
              <Checkbox value="Kiểm tra chất lượng" label="Kiểm tra chất lượng" />
              <Checkbox value="Xử lý đơn hàng" label="Xử lý đơn hàng" />
              <Checkbox value="Bảo hiểm hàng hoá" label="Bảo hiểm hàng hoá" />
              <Checkbox value="Chuỗi cung ứng" label="Chuỗi cung ứng" />
              <Checkbox value="Cross-docking" label="Cross-docking" />
              <Checkbox value="Mục khác:" label="Mục khác:" />
            </Flex>
          </Checkbox.Group>
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            2.6. Công ty Anh/Chị có dịch vụ logistics tự làm hay không?
          </Text>
          <Radio.Group
            label="Tự làm logistics"
            withAsterisk
            {...form.getInputProps('isSelfLogistic')}
          >
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Radio value="Có" label="Có" />
              <Radio value="Không" label="Không" />
            </Flex>
          </Radio.Group>
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            2.7. Công ty Anh/Chị thường hợp tác với các nhà cung cấp dịch vụ logistics nào sau đây?
          </Text>
          <Radio.Group
            label="Nhà cung cấp dịch vụ logistics"
            withAsterisk
            {...form.getInputProps('logisticServiceProvider')}
          >
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Radio value="Công ty logistics nước ngoài" label="Công ty logistics nước ngoài" />
              <Radio value="Công ty logistics nội địa" label="Công ty logistics nội địa" />
              <Radio value="Cả hai" label="Cả hai" />
            </Flex>
          </Radio.Group>
        </Box>

        {/* cdtIncotermsImport: [],
        cdtIncotermsExport: [], */}

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            2.8. Các điều kiện Incoterms mà công ty Anh/Chị thường sử dụng khi thực hiện hợp đồng
            nhập khẩu (công ty không nhập khẩu vui lòng bỏ qua câu này):
          </Text>
          <Checkbox.Group
            label="Điều kiện Incoterms"
            // withAsterisk
            {...form.getInputProps('cdtIncotermsImport')}
          >
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Checkbox value="EXW" label="EXW" />
              <Checkbox value="FCA" label="FCA" />
              <Checkbox value="FOB" label="FOB" />
              <Checkbox value="FAS" label="FAS" />
              <Checkbox value="CIF" label="CIF" />
              <Checkbox value="CFR" label="CFR" />
              <Checkbox value="CIP" label="CIP" />
              <Checkbox value="CPT" label="CPT" />
              <Checkbox value="DAP" label="DAP" />
              <Checkbox value="DAT" label="DAT" />
              <Checkbox value="DDP" label="DDP" />
              <Checkbox value="Mục khác" label="Mục khác" />
            </Flex>
          </Checkbox.Group>
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            2.9. Các điều kiện Incoterms mà công ty Anh/Chị thường sử dụng khi thực hiện hợp đồng
            xuất khẩu (công ty không xuất khẩu vui lòng bỏ qua câu này):
          </Text>
          <Checkbox.Group
            label="Điều kiện Incoterms"
            // withAsterisk
            {...form.getInputProps('cdtIncotermsExport')}
          >
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Checkbox value="EXW" label="EXW" />
              <Checkbox value="FCA" label="FCA" />
              <Checkbox value="FOB" label="FOB" />
              <Checkbox value="FAS" label="FAS" />
              <Checkbox value="CIF" label="CIF" />
              <Checkbox value="CFR" label="CFR" />
              <Checkbox value="CIP" label="CIP" />
              <Checkbox value="CPT" label="CPT" />
              <Checkbox value="DAP" label="DAP" />
              <Checkbox value="DAT" label="DAT" />
              <Checkbox value="DDP" label="DDP" />
              <Checkbox value="Mục khác" label="Mục khác" />
            </Flex>
          </Checkbox.Group>
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            2.10. Địa điểm lấy hàng của Công ty Anh/Chị thường ở đâu? (tại kho sản xuất ở công ty
            hoặc nơi trung gian khác, vui lòng cung cấp địa chỉ cụ thể)
          </Text>
          <TextInput
            withAsterisk
            label="Địa điểm lấy hàng"
            placeholder="Địa điểm lấy hàng"
            {...form.getInputProps('fromLocation')}
          />
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            2.11. Hàng hoá do Công ty Anh/Chị sản xuất vận chuyển đến đâu? (trong nước hoặc nước
            ngoài, vui lòng cung cấp địa chỉ chi tiết)
          </Text>
          <TextInput
            withAsterisk
            label="Địa điểm trả hàng"
            placeholder="Địa điểm trả hàng"
            {...form.getInputProps('toLocation')}
          />
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            2.12. Anh/Chị đánh giá như thế nào về nhu cầu sử dụng dịch vụ logistics đối với ngành
            hàng của công ty trong tương lai?
          </Text>
          <Radio.Group
            label="Đánh giá"
            withAsterisk
            {...form.getInputProps('logisticServiceProvider')}
          >
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Radio value="Tăng dưới 5%" label="Tăng dưới 5%" />
              <Radio value="Tăng từ 5% - dưới 10%" label="Tăng từ 5% - dưới 10%" />
              <Radio value="Tăng từ 10% - dưới 20%" label="Tăng từ 10% - dưới 20%" />
              <Radio value="Tăng từ 20% - dưới 30%" label="Tăng từ 20% - dưới 30%" />
              <Radio value="Tăng từ trên 30%" label="Tăng từ trên 30%" />
            </Flex>
          </Radio.Group>
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            2.13. Với những dịch vụ logistics mà công ty Anh/Chị đang sử dụng, những dịch vụ nào cần
            được cải thiện và phát triển tối ưu hơn, để tiết kiệm chi phí logistics cho doanh
            nghiệp?
          </Text>
          <TextInput
            withAsterisk
            label="Dịch vụ cần cải thiện"
            placeholder="Dịch vụ cần cải thiện"
            {...form.getInputProps('serviceNeedsImproved')}
          />
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            2.14. Công ty Anh/Chị có nhu cầu được cung cấp thêm những dịch vụ logistics nào trong
            tương lai?
          </Text>
          <TextInput
            withAsterisk
            label="Dịch vụ cần thêm"
            placeholder="Dịch vụ cần thêm"
            {...form.getInputProps('serviceNeedsAdd')}
          />
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            2.15. Anh/Chị hãy chọn các yếu tố quan trọng nhất để phát triển dịch vụ logistics tại
            Tỉnh Hà Nam nói riêng, cũng như ở Việt Nam nói chung (có thể chọn nhiều đáp án)?
          </Text>
          <Checkbox.Group
            label="Điều kiện Incoterms"
            withAsterisk
            {...form.getInputProps('importantFactor')}
          >
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Checkbox value="Chính sách thuế" label="Chính sách thuế" />
              <Checkbox value="Thủ tục hải quan" label="Thủ tục hải quan" />
              <Checkbox value="Hành lang pháp lý" label="Hành lang pháp lý" />
              <Checkbox value="Cơ sở hạ tầng" label="Cơ sở hạ tầng" />
              <Checkbox value="Thủ tục hành chính" label="Thủ tục hành chính" />
              <Checkbox value="Chuyển đổi số" label="Chuyển đổi số" />
              <Checkbox value="Đào tạo nhân lực" label="Đào tạo nhân lực" />
              <Checkbox value="Mục khác" label="Mục khác" />
            </Flex>
          </Checkbox.Group>
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.italic)}>
            Mọi ý kiến tham gia khảo sát của Anh/Chị góp phần quan trọng vào kết quả nghiên cứu đề
            tài của chúng tôi!
          </Text>
          <Text className={cx(globalCss.text, globalCss.italic)}>
            Chúc Anh/Chị có thật nhiều sức khoẻ, may mắn và thành công trong công việc!
          </Text>
          <Text className={cx(globalCss.text, globalCss.italic)}>
            Chúc Công ty Anh/Chị sản xuất và kinh doanh ngày càng phát triển hơn nữa!
          </Text>
          <Text className={cx(globalCss.text, globalCss.italic)}>Trân trọng cảm ơn.</Text>
        </Box>

        <Group justify="flex-end" mt="md">
          <Button type="submit">Lưu</Button>
        </Group>
      </form>
    </Container>
  );
};

export default ManufacturingEnterpriseForm;
