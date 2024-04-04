export interface MapData {
  rows: string[]
  cols: string[]
  mapData: number[][]
}

export interface ManufacturingData {
  nameEnterprise: string;
  addressEnterprise: string;
  userName: string;
  phone: string;
  email: string;
  userPosition: string;
  kindOfEnterprise: string;
  kindOfProduct: string[];
  quantityEmployees: string;
  quantityLogisticEmployees: string;
  businessEnterprise: string;
  annualRevenue: string;
  logisticExpense: string;
  feedbackLogisticExpense: string;
  logisticServices: string[];
  transportationWays: string[];
  isSelfLogistic: string;
  logisticServiceProvider: string;
  cdtIncotermsImport: string[];
  cdtIncotermsExport: string[];
  fromLocation: string;
  toLocation: string;
  forecastingLogisticsNeeds: string;
  serviceNeedsImproved: string;
  serviceNeedsAdd: string;
  importantFactor: string[];
}

export interface TransportationData {
  nameEnterprise: string;
  addressEnterprise: string;
  userName: string;
  phone: string;
  email: string;
  userPosition: string;
  kindOfProduct: string[];
  quantityEmployees: string;
  transportationServices: string[];
  logisticServices: string[];
  transportationWays: string[];
  fromLocation: string;
  toLocation: string;
  gateLocation: string;
  feedback: string;
  yourTransportationTech: string;
  yourTechFeedback: string;
  yourComment: string;
}
