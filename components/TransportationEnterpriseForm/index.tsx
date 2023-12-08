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

const TransportationEnterpriseForm = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const form = useForm({
    initialValues: {
      nameEnterprise: '',
      addressEnterprise: '',
      userName: '',
      phone: '',
      email: '',
      userPosition: '',
      kindOfProduct: [],
      quantityEmployees: '',
      transportationServices: [],
      logisticServices: [],
      transportationWays: [],
      fromLocation: '',
      toLocation: '',
      gateLocation: '',
      feedback: '',
      yourTransportationTech: '',
      yourTechFeedback: '',
      yourComment: '',
    },

    validate: {
      nameEnterprise: (value) => (value ? null : 'Required'),
      addressEnterprise: (value) => (value ? null : 'Required'),
      userName: (value) => (value ? null : 'Required'),
      phone: (value) => (value ? null : 'Required'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      userPosition: (value) => (value ? null : 'Required'),
      kindOfProduct: (value) => (value.length > 0 ? null : 'Required'),
      quantityEmployees: (value) => (value ? null : 'Required'),
      transportationServices: (value) => (value.length > 0 ? null : 'Required'),
      logisticServices: (value) => (value.length > 0 ? null : 'Required'),
      transportationWays: (value) => (value.length > 0 ? null : 'Required'),
      fromLocation: (value) => (value ? null : 'Required'),
      toLocation: (value) => (value ? null : 'Required'),
      gateLocation: (value) => (value ? null : 'Required'),
      feedback: (value) => (value ? null : 'Required'),
      yourTransportationTech: (value) => (value ? null : 'Required'),
      yourTechFeedback: (value) => (value ? null : 'Required'),
      yourComment: (value) => (value ? null : 'Required'),
    },
  });
  return (
    <Container pb={rem(isMobile ? 50 : 100)} pt={rem(50)}>
      <Flex align="center" justify="center" mb={30}>
        <Text className={cx(globalCss.title, globalCss.bold, globalCss.textCenter)}>
          PHIẾU KHẢO SÁT CÁC DOANH NGHIỆP VẬN TẢI CHUYÊN CHỞ HÀNG HOÁ TRÊN ĐỊA BÀN TỈNH HÀ NAM
        </Text>
      </Flex>
      {/* <Text className={globalCss.text}>Kính thưa Anh/Chị!</Text>
      <Text className={globalCss.text}>
        Chúng tôi là một nhóm nghiên cứu về dịch vụ logistics của Trường Đại học Giao thông vận tải.
        Đề tài nghiên cứu cấp Tỉnh của chúng tôi là “Giải pháp phát triển dịch vụ Logistics tại Tỉnh
        Hà Nam”. Nhóm nghiên cứu tiến hành khảo sát này nhằm thu thập thông tin, dữ liệu, kế hoạch,
        phân phối, hành trình vận chuyển hàng hoá giữa các doanh nghiệp trong khu vực Tỉnh Hà Nam
        cũng như các tỉnh Phía Bắc. Kết quả khảo sát góp phần quan trọng cho nhóm nghiên cứu hoàn
        thành đề tài. Mọi thông tin cung cấp trong khảo sát này chỉ dùng cho mục đích nghiên cứu.
        Nhóm nghiên cứu chân thành cảm ơn và hoan nghênh mọi ý kiến đóng góp, mọi sự hợp tác của Quý
        Anh/Chị, đồng thời cam kết bảo mật thông tin của người tham gia khảo sát.
      </Text>
      <Text className={globalCss.text}>Để trả lời đầy đủ Phiếu hỏi sẽ cần khoảng 15 phút.</Text>
      <Text className={globalCss.text}>Chân thành cảm ơn sự hợp tác của Quý Anh/Chị.</Text> */}
      <Space h="xl" />

      <form onSubmit={form.onSubmit((values) => console.log(values, '==================='))}>
        <Text className={cx(globalCss.text, globalCss.bold)}>
          1. Thông tin chung về doanh nghiệp vận tải
        </Text>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            1.1. Tên doanh nghiệp của Anh/Chị?
          </Text>
          <TextInput
            withAsterisk
            label="Tên doanh nghiệp"
            placeholder="Tên doanh nghiệp"
            {...form.getInputProps('nameEnterprise')}
          />
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            1.2. Địa chỉ doanh nghiệp của Anh/Chị?
          </Text>
          <TextInput
            withAsterisk
            label="Địa chỉ doanh nghiệp"
            placeholder="Địa chỉ doanh nghiệp"
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
          <Text className={cx(globalCss.text, globalCss.bold)}>
            1.7. Loại hàng hoá mà doanh nghiệp của Anh/Chị chuyên chở?
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
            1.8. Số lượng nhân viên của doanh nghiệp Anh/Chị?
          </Text>
          <Radio.Group
            label="Số lượng nhân viên"
            withAsterisk
            {...form.getInputProps('quantityEmployees')}
          >
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Radio value="Dưới 50" label="Dưới 50" />
              <Radio value="51 – 100" label="51 – 100" />
              <Radio value="101 – 200" label="101 – 200" />
              <Radio value="201 – 500" label="201 – 500" />
              <Radio value="501 – 1000" label="501 – 1000" />
              <Radio value="1001 – 2000" label="1001 – 2000" />
              <Radio value="Từ 2001 trở lên" label="Từ 2001 trở lên" />
            </Flex>
          </Radio.Group>
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            1.9. Doanh nghiệp của Anh/Chị đang cung cấp những dịch vụ vận tải nào?
          </Text>
          <Checkbox.Group
            label="Dịch vụ vận tải"
            withAsterisk
            {...form.getInputProps('transportationServices')}
          >
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Checkbox value="Dịch vụ vận chuyển quốc tế" label="Dịch vụ vận chuyển quốc tế" />
              <Checkbox value="Dịch vụ vận tải nội địa" label="Dịch vụ vận tải nội địa" />
              <Checkbox value="Dịch vụ cho thuê xe tải" label="Dịch vụ cho thuê xe tải" />
              <Checkbox value="Dịch vụ vận chuyển Container" label="Dịch vụ vận chuyển Container" />
            </Flex>
          </Checkbox.Group>
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            1.10. Doanh nghiệp của Anh/Chị có cung cấp thêm những dịch vụ logistics nào sau đây?
            (lựa chọn nhiều phương án khác nhau)
          </Text>
          <Checkbox.Group
            label="Dịch vụ logistics"
            withAsterisk
            {...form.getInputProps('logisticServices')}
          >
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Checkbox value="Làm thủ tục xuất/nhập khẩu" label="Làm thủ tục xuất/nhập khẩu" />
              <Checkbox value="Khai báo hải quan" label="Khai báo hải quan" />
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
            1.11. Doanh nghiệp Anh/Chị chuyên chở hàng hoá bằng phương thức vận tải nào sau đây?
          </Text>
          <Checkbox.Group
            label="Phương thức vận tải"
            withAsterisk
            {...form.getInputProps('transportationWays')}
          >
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Checkbox value="Vận tải đường bộ" label="Vận tải đường bộ" />
              <Checkbox value="Vận tải đường sắt" label="Vận tải đường sắt" />
              <Checkbox value="Vận tải đường hàng không" label="Vận tải đường hàng không" />
              <Checkbox value="Vận tải đường biển" label="Vận tải đường biển" />
              <Checkbox value="Vận tải đường thuỷ nội địa" label="Vận tải đường thuỷ nội địa" />
              <Checkbox
                value="Kết hợp nhiều phương thức vận tải"
                label="Kết hợp nhiều phương thức vận tải"
              />
            </Flex>
          </Checkbox.Group>
        </Box>

        <Space h="xl" />

        <Text className={cx(globalCss.text, globalCss.bold)}>
          2. Thông tin về tình hình hoạt động của doanh nghiệp vận tải
        </Text>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            2.1. Anh/Chị vui lòng cho biết địa điểm lấy hàng của doanh nghiệp? (nơi đi của hàng hoá
            cần được vận chuyển, vui lòng cung cấp địa chỉ chi tiết)
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
            2.2. Anh/Chị vui lòng cho biết địa điểm trả hàng của doanh nghiệp? (nơi đến của hàng hoá
            cần được vận chuyển, vui lòng cung cấp địa chỉ chi tiết)
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
            2.3. Doanh nghiệp thường xuyên vận chuyển hàng hoá xuất/nhập khẩu tại cửa khẩu nào?
          </Text>
          <TextInput
            withAsterisk
            label="Địa điểm cửa khẩu"
            placeholder="Địa điểm cửa khẩu"
            {...form.getInputProps('gateLocation')}
          />
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            2.4. Anh/Chị đánh giá như thế nào về cơ sở hạ tầng vận tải tại doanh nghiệp?
          </Text>
          <Radio.Group label="Đánh giá" withAsterisk {...form.getInputProps('feedback')}>
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Radio value="Rất kém" label="Rất kém" />
              <Radio value="Kém" label="Kém" />
              <Radio value="Bình thường" label="Bình thường" />
              <Radio value="Tốt" label="Tốt" />
              <Radio value="Rất tốt" label="Rất tốt" />
              <Radio value="Mục khác:" label="Mục khác:" />
            </Flex>
          </Radio.Group>
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            2.5. Doanh nghiệp của Anh/Chị sử dụng công nghệ nào trong quản lý vận tải?
          </Text>
          <TextInput
            withAsterisk
            label="Công nghệ quản lý"
            placeholder="Công nghệ quản lý"
            {...form.getInputProps('yourTransportationTech')}
          />
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            2.6. Anh/Chị đánh giá như thế nào về tác động của công nghệ tới hiệu quả hoạt động của
            doanh nghiệp?
          </Text>
          <Radio.Group label="Đánh giá" withAsterisk {...form.getInputProps('yourTechFeedback')}>
            <Flex mt="xs" direction="column" gap={rem(12)}>
              <Radio value="Rất thấp" label="Rất thấp" />
              <Radio value="Thấp" label="Thấp" />
              <Radio value="Bình thường" label="Bình thường" />
              <Radio value="Cao" label="Cao" />
              <Radio value="Rất cao" label="Rất cao" />
            </Flex>
          </Radio.Group>
        </Box>

        <Box className={globalCss.formField}>
          <Text className={cx(globalCss.text, globalCss.bold)}>
            2.7. Anh/Chị vui lòng đóng góp ý kiến nhằm phát triển dịch vụ logistics tại Tỉnh Hà Nam?
          </Text>
          <TextInput
            withAsterisk
            label="Ý kiến"
            placeholder="Ý kiến"
            {...form.getInputProps('yourComment')}
          />
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

export default TransportationEnterpriseForm;
