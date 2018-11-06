export interface Receipt {
    inputdate:         string;
	receiptdate:       string;
	clientname:        string;
	origin:            string;
	destination:       string;
	totalprice:        number;
	drivername:        string;
	platenumber:       string;
	drivercost:        number;
	othercost:         number;
	totalcost:         number;
	profit:            number;
	adddtionalremarks: string;
	status:            boolean;
	paiddate:          string;
}
