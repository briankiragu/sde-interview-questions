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

console.dir({
  emails1: numUniqueEmails(emails1),
  emails2: numUniqueEmails(emails2),
});
