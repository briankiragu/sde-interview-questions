const numUniqueEmails = (emails: string[]): number => {
  const email: string = emails.at(0);

  // Split the string into two parts; local name and domain name;
  const [local, domain] = email.split('@');

  console.dir({ local, domain });
};

export default numUniqueEmails;

const emails: string[] = [
  'test.email+alex@leetcode.com',
  'test.e.mail+bob.cathy@leetcode.com',
  'testemail+david@lee.tcode.com',
];

numUniqueEmails(emails);
