import numUniqueEmails from './leet-code/unique-email-addresses';

const emails1: string[] = [
  'test.email+alex@leetcode.com',
  'test.e.mail+bob.cathy@leetcode.com',
  'testemail+david@lee.tcode.com',
];

const emails2: string[] = [
  'a@leetcode.com',
  'b@leetcode.com',
  'c@leetcode.com',
];

const uniqueEmails1 = numUniqueEmails(emails1);
const uniqueEmails2 = numUniqueEmails(emails2);

console.dir({ uniqueEmails1, uniqueEmails2 });
