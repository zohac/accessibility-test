interface ResultIssue {
  code: string;
  context: string;
  message: string;
  selector: string;
  type: string;
  typeCode: number;
}

export interface ResultsInterface {
  documentTitle: string;
  pageUrl: string;
  issues: ResultIssue[];
}
