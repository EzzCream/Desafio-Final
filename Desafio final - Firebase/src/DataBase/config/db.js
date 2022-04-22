import admin from 'firebase-admin';

const serviceAccount = {
	type: 'service_account',
	project_id: 'ecommerce-c48ce',
	private_key_id: '8cc3d9b8579c7bd755a4c4a3374f777f9b575898',
	private_key:
		'-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDwg+nhCOkakgQF\nzW6kd4M7+wCjaNqNvW0kDDRPA4omjEH5KLc6QiMamDHYCYdv3vIVqHnsq6QGRtj4\n8OOwM+Yeqrsbbei/PwIoOR1aDtgy9XyFpT4kcIo1d5sGBg2t9T4xTyKBiscuQpkh\nMjybpWyapS6NQaQS/fBXv0Wvjilra0S0tIAgQfSFcSb2D4YGQ9DOIAWgJl+AdHj3\nOVTxSkkIk9fphOzK3RYZg05NFrgA+l60jc/DxcgkIwH0/VT3zaz+TxWEgYDDYRtF\nd8WX3X6phqeuBPfog4Q9hLqMfMYoKy7hieW7ncBN5ajtu7xqUdsDzylcLMnMRk7B\naC71TLw1AgMBAAECggEAQMYmDLcLoF5GuxFShPSy4Up+J4QrqBSl+hlXVRhM8oi/\nk8zFW+lH7veiJN6cHSLb671N6NFpAU+/S3wEtgWkKgotDfwRvL/JYu/O2dw5ma/H\nc27HR6UPc8rcc0jaEkmEEF+RmXW4otrIxsnyzLBGiXeHC//rojnFqrwWlmsg+I6L\nY/0qyvJK3YpRqPFdQ0eIYuaStqUJ0mE1t9lgor3LGE661ZaHLuO9b872D/bE+Ka+\nhUYzmJqWlDj+ayT2PV6JfaOHJ34z9GRlmQpu5k/j5EmvlkO8CNI2cOSKbLxz5oWg\nOQgmqFqPiuJZYOB6N7Wq3080SzsJ2Om8YSjfSUU2GQKBgQD++xCl+TmEX7f7F0af\nL3B3wbb4d4H0cTYSFfeMAWYNikFQvOafo34ZP+MxsfA0W0M6aOwJxxS/W3M/cA/x\nLSJd7ZJHxs1EO2I0TnmjJrVws2P87VqyuvuAuPaIf1Sd3gCCPt0BFMWkNYuTXExj\nNpBjhSr2h+HsbC8roT0ynY79/wKBgQDxeguariOI5N9FaI9u0ljDRXTGxDfrbjtL\n6mhjYGjGTDK/Ral1XjZ1RVtzU/sEVmGbk/9mc037baKUp6Flf5V7Y0fqvBbB3+pV\n1+yV07dEO9lV2G7T1WZf5NIG+/iabIxzghfo93harKyFyMGZxbpoxfF0NUcMizto\neNQoJLytywKBgCkhvxHHHmwoNLmgi5fqQy5OZYG3ZZNVH+/S81f2ccwFXXv0vQ9L\nhG/2SmQd3C3V+wZVHp6FKuejjPfSz/+L1Ftqk4pYm4xCOBlP/3c+K06+4YZPk635\nU9D0BXEHeVLuGQ7prSUbgLZ4nMdswDXQ+4HSXZffW6aT3RggroqXuBVpAoGAQP/y\nKbPgOtQoyX0oxtL2M7H5iht9VfE5Iuk5Ki7kZSRTsKrmv4IZtJ1zzWp4siUyZveC\nkyhMgHZ1ggBRcInUSf9id2wj0BIe+PaDZ50ywro9eV8mDf1ubjeg1WJz+9VmRR1q\npDog+n9qfSSaAHN6BwPpR7ejpVvBJREJQrkI1NsCgYAedm4pvakW/44lW6eP6a3S\nmN26dZZ8fd7195CIcug+waO8/oG1ETuX2srZL/rq810ESD9KKjEeGVUpnOHWkZWw\nD3SlU5r5u49eBv647qGsYHRomHSzuBfgHasbgLu1QnDk7onxvBoprOf+xZpf8EVL\nMDKNhcmEzkExakCBUKg+1A==\n-----END PRIVATE KEY-----\n',
	client_email:
		'firebase-adminsdk-p5n54@ecommerce-c48ce.iam.gserviceaccount.com',
	client_id: '101293985009930246234',
	auth_uri: 'https://accounts.google.com/o/oauth2/auth',
	token_uri: 'https://oauth2.googleapis.com/token',
	auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
	client_x509_cert_url:
		'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-p5n54%40ecommerce-c48ce.iam.gserviceaccount.com',
};

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

export const query = db.collection('producto');
export const queryCar = db.collection('carrito');
export const queryCarProd = db.collection('carritoProd');

console.log('Conectado con firebase 😁');
