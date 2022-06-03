export function makeid(length: number) {
  var text = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
export function messageOnArray(arrayMessage: string[]) {
  let posotion = Math.floor(Math.random() * arrayMessage.length);
  return arrayMessage[posotion] +" , "+ Date.now();
}
