/* eslint-disable no-return-await */
const TOKEN = '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';

const requestHeaders: HeadersInit = { Authorization: `token ${TOKEN}` };

async function getIssues(BASE_URL: string): Promise<Response> {
  return await fetch(BASE_URL);
}

export default getIssues;
