import { MatchReader } from "./MatchReader";
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv')
const summary = Summary.winsAnalysisWithHtmlReport('Man United');
const summary1 = Summary.winsAnalysisWithConsoleReport('Newcastle');

matchReader.load();

summary.buildAndPrintReport(matchReader.matches);
summary1.buildAndPrintReport(matchReader.matches);

