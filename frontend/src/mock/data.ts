import type { CognateSet, LanguageFamily } from '../types'

export const LANGUAGE_FAMILIES: LanguageFamily[] = [
  { id: 'ie', name: '印欧语系', color: '#3b82f6', languages: ['英语','法语','德语','西班牙语','俄语','拉丁语'], era: '公元前4000年' },
  { id: 'st', name: '汉藏语系', color: '#22c55e', languages: ['汉语','藏语','缅甸语'], era: '公元前4000年' },
  { id: 'aa', name: '亚非语系', color: '#f59e0b', languages: ['阿拉伯语','希伯来语'], era: '公元前6000年' },
  { id: 'ural', name: '乌拉尔语系', color: '#8b5cf6', languages: ['芬兰语','匈牙利语'], era: '公元前5000年' },
]

export const COGNATE_SETS: CognateSet[] = [
  {
    root: '*pṓds', meaning: '脚/足', languages: { '英语': 'foot', '法语': 'pied', '德语': 'Fuß', '西班牙语': 'pie', '俄语': 'ступня', '拉丁语': 'pēs' }, period: 'PIE', family: 'ie',
    examples: [
      { word: 'pedestrian', language: '英语', sentence: 'This street is closed to pedestrians after 10 pm.', translation: '这条街晚上十点后禁止行人通行。（ped- 脚 → 步行者）' },
      { word: 'tripod', language: '英语', sentence: 'The camera is mounted on a tripod.', translation: '相机架在三脚架上。（tri- 三 + pod 脚）' },
      { word: 'pied', language: '法语', sentence: "Il s'est cassé le pied en skiant.", translation: '他滑雪时摔伤了脚。' },
    ],
    misconceptions: [
      'pedophile（恋童癖）中的 ped- 来自希腊语 pais（儿童），与表示“脚”的 ped-/pod- 只是拼写巧合，词源无关。',
      '英语 foot 与拉丁语 pēs 看似毫不相干，实则同源：格林定律使 *p→f、*d→t（对比 pater/father）。',
      '俄语 ступня 并非 *pṓds 的后裔（来自“踩踏”词根）；该词根在俄语中的痕迹见于 пята（脚跟）。',
    ],
  },
  {
    root: '*mātér', meaning: '母亲', languages: { '英语': 'mother', '法语': 'mère', '德语': 'Mutter', '西班牙语': 'madre', '俄语': 'мать', '拉丁语': 'māter' }, period: 'PIE', family: 'ie',
    examples: [
      { word: 'maternal', language: '英语', sentence: 'She felt a strong maternal instinct.', translation: '她感到强烈的母性本能。' },
      { word: 'matriarch', language: '英语', sentence: 'The matriarch of the family is 92 years old.', translation: '这个家族的女族长今年 92 岁。（matri- 母 + arch 统治）' },
      { word: 'mère', language: '法语', sentence: 'Sa mère lui a écrit une lettre.', translation: '她母亲给她写了一封信。' },
    ],
    misconceptions: [
      '各语言 mama/妈妈 的相似不是同源证据——它们是婴儿最易发出的音节，在世界各地独立产生；真正的同源词是 *mātér 这一完整形式。',
      'matter（物质）与 mother 同源：拉丁语 māteria 原指“树干/原料”，派生自 māter——取“万物之母”的隐喻。',
    ],
  },
  {
    root: '*pṓtr', meaning: '父亲', languages: { '英语': 'father', '法语': 'père', '德语': 'Vater', '西班牙语': 'padre', '俄语': 'отец', '拉丁语': 'pater' }, period: 'PIE', family: 'ie',
    examples: [
      { word: 'paternal', language: '英语', sentence: "He inherited his paternal grandfather's watch.", translation: '他继承了祖父（父系）的手表。' },
      { word: 'patriot', language: '英语', sentence: 'A patriot is devoted to his fatherland.', translation: '爱国者忠于他的祖国。（patria 父祖之地 ← pater）' },
      { word: 'père', language: '法语', sentence: 'Son père travaille à Paris.', translation: '他父亲在巴黎工作。' },
    ],
    misconceptions: [
      '英语 father 不是从拉丁语 pater 借来的，二者是同源继承词：格林定律 *p→f、*t→th（对比德语 Vater）。',
      '俄语 отец 来自儿语词 *atta（爸爸）加后缀，并非 *pṓtr 的直系后裔——该词根的俄语对应形式已消失。',
    ],
  },
  {
    root: '*h₂épo', meaning: '水', languages: { '英语': 'aqua', '法语': 'eau', '德语': 'Au', '西班牙语': 'agua', '俄语': 'вода', '拉丁语': 'aqua' }, period: 'PIE', family: 'ie',
    examples: [
      { word: 'aquarium', language: '英语', sentence: 'They keep tropical fish in a large aquarium.', translation: '他们在大水族箱里养热带鱼。' },
      { word: 'aquatic', language: '英语', sentence: 'Aquatic plants grow near the pond.', translation: '水生植物生长在池塘边。' },
      { word: 'eau', language: '法语', sentence: "Je bois un verre d'eau.", translation: '我喝一杯水。（eau 由拉丁语 aqua 音变而来）' },
    ],
    misconceptions: [
      '此词根只残留在拉丁语（aqua）和日耳曼语（哥特语 ahva、德语 Au“河洲”）中；俄语 вода 来自另一词根 *wédōr，与 aqua 并不同源（见 *wḗdr̥ 条）。',
      '英语 aqua- 系列词（aquarium/aquatic）是近代从拉丁语的学术借词，并非英语本土继承词。',
    ],
  },
  {
    root: '*dʰómos', meaning: '家', languages: { '英语': 'dome', '法语': 'maison', '德语': 'Dom', '西班牙语': 'domo', '俄语': 'дом', '拉丁语': 'domus' }, period: 'PIE', family: 'ie',
    examples: [
      { word: 'domestic', language: '英语', sentence: 'Domestic flights are usually cheaper.', translation: '国内航班通常更便宜。（domus 家 → 家庭的/国内的）' },
      { word: 'dominate', language: '英语', sentence: 'One company dominates the market.', translation: '一家公司主导着市场。（dominus 家主 ← domus）' },
      { word: 'дом', language: '俄语', sentence: 'Мой дом находится рядом с парком.', translation: '我家在公园旁边。' },
    ],
    misconceptions: [
      '法语 maison 与 domus 无关——它来自拉丁语 mansio（“停留处”，manēre 停留），法语用新词替换了旧词。',
      'dome（圆顶）与 domestic（家庭的）同源：圆顶最初就是“房子”本身（意大利语 duomo 大教堂即“主之家”）；德语 Dom 也专指大教堂而非普通住宅。',
    ],
  },
  {
    root: '*wḗdr̥', meaning: '水/Water', languages: { '英语': 'water', '法语': 'eau', '德语': 'Wasser', '俄语': 'вода', '拉丁语': 'unda' }, period: 'PIE', family: 'ie',
    examples: [
      { word: 'waterproof', language: '英语', sentence: 'This watch is waterproof.', translation: '这块表是防水的。' },
      { word: 'hydrate', language: '英语', sentence: 'Drink regularly to stay hydrated.', translation: '经常喝水以保持水分。（希腊语 hydōr 与本词根同源）' },
      { word: 'вода', language: '俄语', sentence: 'Вода в реке холодная.', translation: '河里的水很冷。' },
    ],
    misconceptions: [
      'vodka（伏特加）字面意思是“小水”——它是俄语 вода 的指小形式，与 water 同源。',
      '法语 eau 来自拉丁语 aqua（*h₂épo 词根），与本行的 water/вода 并不同源；对照表按语义归为一行，不代表词源相同。',
    ],
  },
  {
    root: '*sol-', meaning: '太阳', languages: { '英语': 'sun', '法语': 'soleil', '德语': 'Sonne', '西班牙语': 'sol', '俄语': 'солнце', '拉丁语': 'sol' }, period: 'PIE', family: 'ie',
    examples: [
      { word: 'solar', language: '英语', sentence: 'Solar panels convert sunlight into electricity.', translation: '太阳能板把阳光转化为电。' },
      { word: 'solstice', language: '英语', sentence: 'The summer solstice is the longest day of the year.', translation: '夏至是一年中白昼最长的一天。（sol 太阳 + sistere 停驻）' },
      { word: 'soleil', language: '法语', sentence: "Le soleil se lève à l'est.", translation: '太阳从东方升起。' },
    ],
    misconceptions: [
      '英语 sun 与拉丁语 sol 是同源词而非借词：日耳曼语中多出的 -n（对比德语 Sonne、俄语 солнце）来自 PIE 异干词的 n- 词干形式。',
      'solstice（至日）字面义为“太阳停驻”——古人观察到至日前后太阳直射点仿佛停住再折返。',
    ],
  },
  {
    root: '*luks-', meaning: '光/亮', languages: { '英语': 'light', '法语': 'lumière', '德语': 'Licht', '西班牙语': 'luz', '俄语': 'луч', '拉丁语': 'lux' }, period: 'PIE', family: 'ie',
    examples: [
      { word: 'lucid', language: '英语', sentence: 'She gave a lucid explanation of the theory.', translation: '她对这个理论给出了清晰明了的解释。（光明 → 明晰）' },
      { word: 'translucent', language: '英语', sentence: 'The frosted glass is translucent.', translation: '磨砂玻璃是半透明的。（trans- 穿过 + luc 光）' },
      { word: 'Licht', language: '德语', sentence: 'Mach bitte das Licht an.', translation: '请把灯打开。' },
    ],
    misconceptions: [
      '英语 light 与拉丁语 lux 同源：格林定律 *k→h（对比德语 Licht），light 拼写中的 gh 正是古 /x/ 音的遗迹。',
      'Lucifer 字面义是“带来光明者”（lux 光 + ferre 携带），本是晨星（金星）的名字，后来才被附会为恶魔之名。',
    ],
  },
  {
    root: '*nokʷt-', meaning: '夜晚', languages: { '英语': 'night', '法语': 'nuit', '德语': 'Nacht', '西班牙语': 'noche', '俄语': 'ночь', '拉丁语': 'nox' }, period: 'PIE', family: 'ie',
    examples: [
      { word: 'nocturnal', language: '英语', sentence: 'Owls are nocturnal birds.', translation: '猫头鹰是夜行性鸟类。' },
      { word: 'equinox', language: '英语', sentence: 'Day and night are equally long at the equinox.', translation: '春分时昼夜等长。（aequus 相等 + nox 夜）' },
      { word: 'nuit', language: '法语', sentence: 'Bonne nuit, à demain.', translation: '晚安，明天见。' },
    ],
    misconceptions: [
      '英语 night 中的 gh 原本读 /x/（与德语 Nacht 的 ch 相同），后来发音脱落，拼写却保留至今。',
      'equinox（昼夜平分点）里的 -nox 就是“夜”：equi（相等）+ nox（夜），即“昼夜相等之日”。',
    ],
  },
  {
    root: '*okʷ-', meaning: '眼睛', languages: { '英语': 'eye', '法语': 'oeil', '德语': 'Auge', '西班牙语': 'ojo', '俄语': 'око', '拉丁语': 'oculus' }, period: 'PIE', family: 'ie',
    examples: [
      { word: 'binoculars', language: '英语', sentence: 'He watched the birds through binoculars.', translation: '他用双筒望远镜观鸟。（bini 双 + oculus 眼）' },
      { word: 'inoculate', language: '英语', sentence: 'The children were inoculated against flu.', translation: '孩子们接种了流感疫苗。（本义“嫁接芽眼”）' },
      { word: 'Auge', language: '德语', sentence: 'Sie hat blaue Augen.', translation: '她有一双蓝眼睛。' },
    ],
    misconceptions: [
      '英语 eye 与拉丁语 oculus 同源：格林定律 *k→h 后，日耳曼语中的辅音进一步弱化消失，只剩元音核。',
      'inoculate（接种）本义是“嫁接芽眼”——oculus 在园艺中指接穗的“芽眼”，后来才引申为医学上的接种。',
    ],
  },
  {
    root: '*ed-', meaning: '吃', languages: { '英语': 'eat', '德语': 'essen', '俄语': 'есть', '拉丁语': 'edere' }, period: 'PIE', family: 'ie',
    examples: [
      { word: 'edible', language: '英语', sentence: 'These mushrooms are edible.', translation: '这些蘑菇可以食用。' },
      { word: 'obese', language: '英语', sentence: 'Obese patients need dietary advice.', translation: '肥胖患者需要饮食建议。（ob- 彻底 + edere 吃）' },
      { word: 'essen', language: '德语', sentence: 'Wir essen um sieben Uhr.', translation: '我们七点吃饭。' },
    ],
    misconceptions: [
      'etch（蚀刻）与 eat 同源：它来自德语 ätzen“（用酸）腐蚀”，本义即“让酸把金属吃掉”，是 essen 的使役形式。',
      'obese（肥胖的）字面义是“（因贪吃而）被吃掉的”——拉丁语 obēsus 是 obedere“吞吃殆尽”的过去分词。',
    ],
  },
  {
    root: '*ǵneh₃-', meaning: '知道', languages: { '英语': 'know', '德语': 'kennen', '西班牙语': 'conocer', '俄语': 'знать', '拉丁语': 'gnoscere' }, period: 'PIE', family: 'ie',
    examples: [
      { word: 'recognize', language: '英语', sentence: 'I recognized her voice immediately.', translation: '我立刻听出了她的声音。（re- 再 + cogn 知道）' },
      { word: 'cognition', language: '英语', sentence: 'Cognition develops rapidly in childhood.', translation: '认知能力在童年迅速发展。' },
      { word: 'kennen', language: '德语', sentence: 'Ich kenne ihn seit Jahren.', translation: '我认识他很多年了。' },
    ],
    misconceptions: [
      '英语 know 的 k 原本发音（与德语 kennen 一致），中古英语后期才脱落，拼写未随之更新。',
      'ignore（忽视）与 know 同源：i(g)- 是否定前缀 in- 的变体，字面义即“不知道、不予理会”。',
    ],
  },
  {
    root: '*h₃érō', meaning: '鹰', languages: { '英语': 'eagle', '法语': 'aigle', '德语': 'Adler', '西班牙语': 'águila', '拉丁语': 'aquila' }, period: 'PIE', family: 'ie',
    examples: [
      { word: 'aquiline', language: '英语', sentence: 'He has an aquiline nose.', translation: '他长着一个鹰钩鼻。（aquila 鹰 → 如鹰喙般弯曲的）' },
      { word: 'erne', language: '英语（古语）', sentence: 'The erne circles above the cliffs.', translation: '海雕在悬崖上空盘旋。（英语本土继承词）' },
      { word: 'aigle', language: '法语', sentence: "L'aigle survole la montagne.", translation: '雄鹰飞越山巅。' },
    ],
    misconceptions: [
      '英语 eagle 并非本土词，而是诺曼征服后从法语 aigle（< 拉丁语 aquila）借入；英语的本土继承词是 erne，现仅存于方言和诗歌。',
      '德语 Adler 看似与 eagle 无关，其实后半 -ler 来自古高地德语 ar“鹰”，与英语 erne 同源；Adelar 本义“高贵的鹰”。',
    ],
  },
  {
    root: '*sker-', meaning: '切割', languages: { '英语': 'shear', '德语': 'scheren', '俄语': 'резать', '拉丁语': 'scindere' }, period: 'PIE', family: 'ie',
    examples: [
      { word: 'shear', language: '英语', sentence: 'Farmers shear sheep in spring.', translation: '牧民在春天剪羊毛。' },
      { word: 'share', language: '英语', sentence: 'They shared the cake equally.', translation: '他们平分了蛋糕。（切分 → 分享）' },
      { word: 'score', language: '英语', sentence: 'He scored twenty points.', translation: '他得了二十分。（刻痕计数 → 得分）' },
    ],
    misconceptions: [
      'share（分享）与 shear（剪切）同源：“分享”的本义就是“把整体切分开”。',
      'shirt（衬衫）与 skirt（短裙）本是同一个词（“短裁之衣”）：shirt 走英语本土演变，skirt 是北欧语借入，是一对“同源异形词”。',
      'scissors 的 sc- 拼写是文艺复兴学者误以为它来自拉丁语 scindere（切）而强加的，实际源自 caedere 一支。',
    ],
  },
  {
    root: '*gʷen-', meaning: '女人', languages: { '英语': 'queen', '德语': 'Frau', '俄语': 'жена' }, period: 'PIE', family: 'ie',
    examples: [
      { word: 'gynecology', language: '英语', sentence: 'She specializes in gynecology.', translation: '她专攻妇科。（希腊语 gunē 女人，与本词根同源）' },
      { word: 'queen', language: '英语', sentence: 'The queen addressed the nation.', translation: '女王向全国发表讲话。' },
      { word: 'жена', language: '俄语', sentence: 'Его жена — врач.', translation: '他的妻子是医生。' },
    ],
    misconceptions: [
      'queen 的本义就是“女人”（对比俄语 жена 至今仍是“妻子”），在英语中后来才升格专指“王后”。',
      'gynecology 的 gyne- 与 queen 同源：PIE *gʷ 在希腊语中变为 g，在日耳曼语中变为 kw（queen 的 qu-）。',
      '德语 Frau 与本词根无关：它来自原始日耳曼语 *frōwō“女主人”，表中列出仅为语义对照。',
    ],
  },
]

export function buildGraph() {
  const nodes: any[] = []
  const links: any[] = []
  COGNATE_SETS.forEach((cs, ci) => {
    const rootId = 'root_' + ci
    nodes.push({ id: rootId, word: cs.root, language: 'Proto-IE', meaning: cs.meaning, family: 'ie', era: '公元前5000年' })
    Object.entries(cs.languages).forEach(([lang, word]) => {
      if (!word || word === '-') return
      const nid = ci + '_' + lang
      nodes.push({ id: nid, word, language: lang, meaning: cs.meaning, family: 'ie', era: '现代' })
      links.push({ source: rootId, target: nid, type: 'derived' })
    })
  })
  return { nodes, links }
}
