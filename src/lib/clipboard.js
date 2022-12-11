import Clipboard from '@react-native-clipboard/clipboard';

export function copyToClipboard(text) {
  Clipboard.setString(text);
}

export async function readFromClipboard() {
  const text = await Clipboard.getString();
  return text;
}
