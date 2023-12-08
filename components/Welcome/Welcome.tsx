'use client';

import { Title, Text, Container, rem } from '@mantine/core';
import classes from './Welcome.module.css';
import globalCss from '../../styles/global.module.css';

export function Welcome() {
  return (
    <Container>
      <Title className={classes.title} ta="center" mt={100}>
        Chào mừng đến với
      </Title>
      <Title className={classes.title} ta="center" mt={20}>
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'orange', to: 'yellow' }}
        >
          TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI
        </Text>
      </Title>

      <Text className={globalCss.text} mt={rem(30)}>
        Kính thưa Anh/Chị!
        <br />
        Chúng tôi là một nhóm nghiên cứu về dịch vụ logistics của Trường Đại học Giao thông vận tải.
        Đề tài nghiên cứu cấp Tỉnh của chúng tôi là “Giải pháp phát triển dịch vụ Logistics tại Tỉnh
        Hà Nam”. Nhóm nghiên cứu tiến hành khảo sát này nhằm thu thập thông tin, dữ liệu, kế hoạch,
        phân phối, hành trình vận chuyển hàng hoá giữa các doanh nghiệp trong khu vực Tỉnh Hà Nam
        cũng như các tỉnh Phía Bắc. Kết quả khảo sát góp phần quan trọng cho nhóm nghiên cứu hoàn
        thành đề tài. Mọi thông tin cung cấp trong khảo sát này chỉ dùng cho mục đích nghiên cứu.
        Nhóm nghiên cứu chân thành cảm ơn và hoan nghênh mọi ý kiến đóng góp, mọi sự hợp tác của Quý
        Anh/Chị, đồng thời cam kết bảo mật thông tin của người tham gia khảo sát.
        <br />
        Để trả lời đầy đủ Phiếu hỏi sẽ cần khoảng 15 phút.
        <br />
        Chân thành cảm ơn sự hợp tác của Quý Anh/Chị.
      </Text>
    </Container>
  );
}
