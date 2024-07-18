
import Flutterwave from 'flutterwave-node-v3';
const config = useRuntimeConfig()
export const flutterwaveClient = new Flutterwave(config.flwPublicKey, config.flwSecretKey);