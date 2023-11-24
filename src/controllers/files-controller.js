import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const home = (req, res) => {
	res.sendFile(path.join(__dirname, '../views/system/system-list.html'));
}

export const login = (req, res) => {
	res.sendFile(path.join(__dirname, '../views/auth/login.html'));
}

export const register = (req, res) => {
	res.sendFile(path.join(__dirname, '../views/auth/register.html'));
}

export const userList = (req, res) => {
	res.sendFile(path.join(__dirname, '../views/user/user-list.html'));
}

export const userEdit = (req, res) => {
	res.sendFile(path.join(__dirname, '../views/user/user-edit.html'));
}

export const systemList = (req, res) => {
	res.sendFile(path.join(__dirname, '../views/system/system-list.html'));
}

export const systemEdit = (req, res) => {
	res.sendFile(path.join(__dirname, '../views/system/system-edit.html'));
}

export const systemCreate = (req, res) => {
	res.sendFile(path.join(__dirname, '../views/system/system-create.html'));
}

export const systemRequests = (req, res) => {
	res.sendFile(path.join(__dirname, '../views/system/system-requests.html'));
}

export const systemDetail = (req, res) => {
	res.sendFile(path.join(__dirname, '../views/system/system-detail.html'));
}

export const deviceDetail = (req, res) => {
	res.sendFile(path.join(__dirname, '../views/device/device-detail.html'));
}

export const deviceCreate = (req, res) => {
	res.sendFile(path.join(__dirname, '../views/device/device-create.html'));
}
