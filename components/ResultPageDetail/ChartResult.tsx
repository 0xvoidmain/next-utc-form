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
import { Bar, Pie } from 'react-chartjs-2';
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
  transportationServices?: string[];
  isSelfLogistic?: string[];
  quantityLogisticEmployees?: string[];
  logisticServices?: string[];
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
      <div style={{ maxWidth: '800px', maxHeight: '300px' }}>
        <Bar options={options} data={dataArcElement} plugins={[ChartDataLabels]} />
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
      <h4 style={{ marginTop: 50 }}>
        2. Biểu đồ doanh nghiệp vận tải có cung cấp dịch vụ cho thuê kho bãi:
      </h4>
      <div style={{ maxWidth: '660px', maxHeight: '300px' }}>
        <Pie
          style={{ maxHeight: '300px' }}
          options={options}
          data={dataArcElement}
          // plugins={[ChartDataLabels]}
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
      <h4 style={{ marginTop: 50 }}>
        3. Biểu đồ nguồn lao động tại doanh nghiệp sản xuất, kinh doanh tại tỉnh Hà Nam:
      </h4>
      <div style={{ maxWidth: '800px', maxHeight: '300px' }}>
        <Bar options={options} data={dataArcElement} plugins={[ChartDataLabels]} />
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
      <h4 style={{ marginTop: 50 }}>
        4. Biểu đồ thể hiện tỷ lệ lựa chọn phương thức vận chuyển hàng hoá:
      </h4>
      <div style={{ maxWidth: '800px', maxHeight: '300px' }}>
        <Bar options={options} data={dataArcElement} plugins={[ChartDataLabels]} />
      </div>
    </>
  );
};

export {
  TransportationServices,
  IsSelfLogistic,
  QuantityLogisticEmployees,
  LogisticServices,
};
