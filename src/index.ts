import ReliableTxtDocument from "./sml/ReliableTxtDocument";
import ReliableTxtEncoding from "./sml/ReliableTxtEncoding";

const doc: ReliableTxtDocument = new ReliableTxtDocument("Line 1", "Line 2", "मूर्खहस्ते न मां दद्यादिति वदति पुस्तकम्", "Line 4\nLine 5\nLine 6", "日本の保育園");
doc.setEncoding(ReliableTxtEncoding.UTF8);

console.log(doc);

doc.save("Example-ReliableTxtDocument.txt");