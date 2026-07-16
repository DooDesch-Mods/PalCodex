// Quick offline check of the corpus + query logic (no MCP transport).
import { loadCorpus, search, getPage, listPages, listSections } from './lib.mjs';

const corpus = loadCorpus();
let failures = 0;
const check = (cond, msg) => {
  console.log(`${cond ? 'ok  ' : 'FAIL'} ${msg}`);
  if (!cond) failures++;
};

check(corpus.pages.length >= 30, `indexed ${corpus.pages.length} pages`);
check(listSections(corpus).length >= 10, `${listSections(corpus).length} sections`);

for (const q of [
  'datatable without unreal',
  'model swap',
  'mappings usmap',
  'UE4SS lua hook',
  'kawaii physics bones',
  'dedicated server UE4SS',
]) {
  const r = search(corpus, q, { limit: 3 });
  check(r.length > 0, `search "${q}" -> ${r.length} hit(s); top: ${r[0]?.slug} (${r[0]?.score})`);
}

const dt = getPage(corpus, 'data-modding/datatable-without-unreal');
check(!!dt && /UAssetGUI/.test(dt.markdown), 'get_page datatable page has UAssetGUI');
check(dt?.sources?.length > 0, `datatable page exposes ${dt?.sources?.length} source credit(s)`);
check(!!dt?.versionStatus, `datatable page reports versionStatus "${dt?.versionStatus}"`);

const byUrl = getPage(corpus, 'https://doodesch-mods.github.io/PalCodex/frameworks/ue4ss/');
check(!!byUrl, 'get_page accepts a full URL');

const frameworks = listPages(corpus, { section: 'frameworks' });
check(frameworks.length >= 5, `list_pages section=frameworks -> ${frameworks.length}`);

const legacy = listPages(corpus, { versionStatus: 'legacy-ea' });
check(Array.isArray(legacy), `list_pages versionStatus=legacy-ea -> ${legacy.length}`);

console.log(failures === 0 ? '\nALL SMOKE CHECKS PASSED' : `\n${failures} CHECK(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
