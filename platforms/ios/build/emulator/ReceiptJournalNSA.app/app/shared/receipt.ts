export interface Receipt {
    inputdate:         string;
	receiptdate:       string;
	clientname:        string;
	origin:            string;
	destination:       string;
	totalprice:        string;
	drivername:        string;
	platenumber:       string;
	drivercost:        number;
	othercost:         number;
	totalcost:         number;
	profit:            number;
	additionalremarks: string;
	status:            boolean;
	paiddate:          string;
}
