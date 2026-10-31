import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const homepage = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const editor = readFileSync(new URL('../editor.html', import.meta.url), 'utf8');
const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');

test('both public pages expose the verified WeChat and personal homepage', () => {
  for (const [name, content] of [['homepage', homepage], ['editor', editor]]) {
    assert.match(content, /AIPMAndy/, name + ': WeChat ID');
    assert.match(content, /https:\/\/metaver\.vip\//, name + ': personal website');
    assert.match(content, /data-copy-wechat/, name + ': copy button');
    assert.match(content, /aria-live="polite"/, name + ': accessible feedback');
    assert.match(content, /navigator\.clipboard\.writeText/, name + ': Clipboard API');
    assert.match(content, /document\.execCommand\('copy'\)/, name + ': fallback clipboard');
    assert.match(content, /复制失败|无法自动复制/, name + ': error feedback');
    assert.match(content, /已复制/, name + ': success feedback');
  }
});
test('homepage contact is reachable by navigation and usable on mobile', () => {
  assert.match(homepage, /href="#contact"/);
  assert.match(homepage, /id="contact"/);
  assert.match(homepage, /class="contact-card"/);
  assert.match(homepage, /@media\(max-width:720px\)/);
  assert.match(homepage, /grid-template-columns:1fr/);
  assert.match(homepage, /href="editor\.html"/);
});
test('editor contact is separate from exported cover drawing', () => {
  assert.match(editor, /class="fc-author-contact"/);
  assert.match(editor, /href="\.\/" aria-label="FreeCover 首页"/);
  assert.match(editor, /id="exportBtn"/);
  const contactPosition = editor.indexOf('class="fc-author-contact"');
  assert.ok(contactPosition > editor.indexOf('<main class="workspace">'));
  assert.ok(editor.includes('复制微信号'));
});
test('public README documents direct, verified contact methods', () => {
  assert.match(readme, /微信：`AIPMAndy`/);
  assert.match(readme, /https:\/\/metaver\.vip\//);
  assert.match(readme, /https:\/\/metaver\.vip\/services/);
});
