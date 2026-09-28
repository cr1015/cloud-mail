import app from '../hono/hono';
import result from '../model/result';
import settingService from '../service/setting-service';
import userContext from "../security/user-context";
import { dbInit } from '../init/init';

app.put('/setting/set', async (c) => {
	await settingService.set(c, await c.req.json());
	return c.json(result.ok());
});

app.get('/setting/query', async (c) => {
	const setting = await settingService.get(c);
	return c.json(result.ok(setting));
});

app.get('/setting/apiInfo', async (c) => {
	const apiInfo = await settingService.apiInfo(c);
	return c.json(result.ok(apiInfo));
});

app.post('/setting/genPublicToken', async (c) => {
	const token = await settingService.genPublicToken(c);
	return c.json(result.ok(token));
});

app.post('/setting/initDatabase', async (c) => {
	await dbInit.init(c, true);
	return c.json(result.ok());
});

app.get('/setting/websiteConfig', async (c) => {
	const setting = await settingService.websiteConfig(c);
	return c.json(result.ok(setting));
})

app.put('/setting/setBackground', async (c) => {
	const key = await settingService.setBackground(c, await c.req.json());
	return c.json(result.ok(key));
});

app.delete('/setting/deleteBackground', async (c) => {
	await settingService.deleteBackground(c);
	return c.json(result.ok());
});

app.put('/setting/setBlacklist', async (c) => {
	const setting = await settingService.setBlacklist(c, await c.req.json());
	return c.json(result.ok(setting));
})

