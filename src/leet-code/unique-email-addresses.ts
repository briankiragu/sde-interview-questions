/**
 * Every valid email consists of a local name and a domain name, separated by the '@' sign.
 * Besides lowercase letters, the email may contain one or more '.' or '+'.
 *
 * For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
 * If you add periods '.' between some characters in the local name part of an email address,
 * mail sent there will be forwarded to the same address without dots in the local name.
 * Note that this rule does not apply to domain names.
 *
 * For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
 * If you add a plus '+' in the local name, everything after the first plus sign will be ignored.
 * This allows certain emails to be filtered. Note that this rule does not apply to domain names.
 *
 * For example, "m.y+name@email.com" will be forwarded to "my@email.com".
 * It is possible to use both of these rules at the same time.
 *
 * Given an array of strings emails where we send one email to each emails[i],
 * return the number of different addresses that actually receive mails.
 *
 * Constraints:
 *
 * 1 <= emails.length <= 100
 * 1 <= emails[i].length <= 100
 * emails[i] consist of lowercase English letters, '+', '.' and '@'.
 * Each emails[i] contains exactly one '@' character.
 * All local and domain names are non-empty.
 * Local names do not start with a '+' character.
 * Domain names end with the ".com" suffix.
 *
 * @param emails
 * @returns
 */
const numUniqueEmails = (emails: string[]): number => {
  // Set will only accept unique values.
  const uniqueProcessedEmails: Set<string> = new Set();

  for (let index = 0; index < emails.length; index++) {
    uniqueProcessedEmails.add(
      // Use a RegEx to remove all the unecessary items;
      // all '.', and anything including and after a '+' symbol.
      emails[index].replace(/\.(?=.*@)|\+.*(?=@)/g, '')
    );
  }

  // Return the size of the set.
  return uniqueProcessedEmails.size;
};

export default numUniqueEmails;
