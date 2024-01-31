const numUniqueEmails = (emails: string[]): number => {
  const processedEmails = emails.map((email) => {
    // Split the string into two parts; local name and domain name;
    const [local, domain] = email.split('@');

    // Split the local name by '+' and discard the remainder.
    let [relevant] = local.split('+', 1) as unknown as string;

    // Replace the '.' with empty space.
    relevant = relevant.replaceAll('.', '');

    // Combine the email address parts.
    return `${relevant}@${domain}`;
  });

  // Create a set from the processed emails.
  const uniqueProcessedEmails = new Set(processedEmails);

  // Return the size of the set.
  return uniqueProcessedEmails.size;
};

export default numUniqueEmails;
