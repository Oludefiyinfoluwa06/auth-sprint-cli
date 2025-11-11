import { jest } from '@jest/globals';

jest.unstable_mockModule('../utils/fs.utils.js', () => ({
  readDir: jest.fn(),
  copyFolder: jest.fn(),
}));

jest.unstable_mockModule('../helpers/logger.helper.js', () => ({
  log: {
    error: jest.fn(),
    info: jest.fn(),
  },
}));

jest.unstable_mockModule('../prompts/select-options.prompt.js', () => ({
  requireOptions: jest.fn(),
}));

jest.unstable_mockModule('../frameworks/express.handler.js', () => ({
  handleExpressSetup: jest.fn(),
}));

const fsUtils = await import('../utils/fs.utils.js');
const logger = await import('../helpers/logger.helper.js');
const prompt = await import('../prompts/select-options.prompt.js');
const { generateAuthBoilerplate } = await import('../commands/create-auth.js');
const expressHandler = await import('../frameworks/express.handler.js');

describe('generateAuthBoilerplate', () => {
  test('log error if directory does not contain package.json file', async () => {
    fsUtils.readDir.mockResolvedValue(['index.js']);

    logger.log.error.mockClear();
    logger.log.info.mockClear();

    prompt.requireOptions.mockResolvedValue({
      framework: 'express.js',
      strategy: 'jwt',
    });

    await generateAuthBoilerplate({ framework: 'express.js', strategy: 'jwt' });

    expect(logger.log.error).toHaveBeenCalledWith('You need to set up an express project');
  });

  test('calls handleExpressSetup when package.json exists and framework is express.js', async () => {
    fsUtils.readDir.mockResolvedValue(['package.json']);
    prompt.requireOptions.mockResolvedValue({
      framework: 'express.js',
      strategy: 'jwt',
    });

    expressHandler.handleExpressSetup.mockResolvedValueOnce();

    await generateAuthBoilerplate({ framework: 'express.js', strategy: 'jwt' });

    expect(expressHandler.handleExpressSetup).toHaveBeenCalledTimes(1);
  });
});
