const baseUrl =
  'https://api.telegram.org/bot7725023396:AAFs0Oa5OWCsp_7WNoA8EQMGVn8EAtP0tpk/sendMessage?chat_id=-1002481301833';

export async function sendMessageToTelegram(message: string) {
  const url = `${baseUrl}&text=${message}&parse_mode=HTML`;
  const response = await fetch(url);

  if (!response.ok) return Promise.reject();
}
