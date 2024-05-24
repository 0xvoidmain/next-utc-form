'use client';

import { Title, Text, Container, rem } from '@mantine/core';
import classes from '../Welcome/Welcome.module.css';
import globalCss from '../../styles/global.module.css';

export function GoogleMapComponent() {
  return (
    <Container>
      <Title className={classes.title} ta="center" mt={20}>
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'orange', to: 'yellow' }}
        >
          “Hà Nam, Phát triển logistics – khẳng định vị thế”
        </Text>
      </Title>

      <Text className={globalCss.text} mt={rem(30)}>
        Hà Nam có lợi thế nằm ở vị trí địa chiến lược là cửa ngõ của vùng
        Thủ đô Hà Nội; gần nguồn nhân lực chất lượng cao, các cảng hàng không
        và cảng biển trọng điểm của vùng Đồng bằng sông Hồng và cả nước.
        Điều kiện tự nhiên thuận lợi, vị trí đắc địa, cơ sở hạ tầng đầu tư đồng bộ,
        nguồn nhân lực đa dạng là các nhân tố thúc đẩy phát triển dịch vụ logistics tại Tỉnh Hà Nam.
      </Text>
      <Text className={globalCss.text} mt={rem(30)}>
        Giải pháp phát triển dịch vụ logistics tại Tỉnh Hà Nam là đề tài mang tính
        cấp thiết và có ý nghĩa vô cùng sâu sắc cho sự phát triển kinh tế - xã hội tại Tỉnh.
        Vươn mình ra biển lớn, khẳng định vị thế và hội nhập quốc tế,
        trong tương lai Hà Nam hướng tới trở thành thành phố
        trực thuộc Trung ương, phát triển bền vững.
      </Text>
    </Container>
  );
}
