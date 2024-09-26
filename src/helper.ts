import CryptoJS from 'crypto-js';
const botToken = '7805244082:AAEj-orEweopmkJQ8LMqmQfEmE_GpJr9QDg';
export const verifyTelegramWebAppData = async (telegramInitData: string): Promise<boolean> => {
    const initData = new URLSearchParams(telegramInitData);
    const hash = initData.get("hash");
    let dataToCheck: string[] = [];
    
    initData.sort();
    initData.forEach((val, key) => key !== "hash" && dataToCheck.push(`${key}=${val}`));
    
    const secret = CryptoJS.HmacSHA256(botToken, "WebAppData");
    const _hash = CryptoJS.HmacSHA256(dataToCheck.join("\n"), secret).toString(CryptoJS.enc.Hex);
    
    return _hash === hash;
  }