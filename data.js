/* ============ TEMAS ============ */
/* grp: 'fallos' = donde perdiste puntos · 'repaso' = ya lo dominas, solo mantener */
const T={
 adj:{grp:'fallos',n:'Partizip I/II como adjetivo',e:'🧩',d:'geprägte Stadt · boomende Stadt · terminaciones',
  rule:`<b>Partizip II</b> (acción terminada / pasiva): <i>gebaut → das gebaute Haus</i>. Irregulares: entstehen → <i>entstanden</i>. Una sola terminación: beschädigt + en = <i>beschädigten</i>, no "beschädigenen". Los verbos en <i>-ieren</i> no llevan ge-: <i>restauriert</i>.<br>
  <b>Partizip I</b> (acción en curso) = infinitivo + d: <i>boomen → boomend</i>.<br>
  <b>Terminaciones (nominativo):</b> con <i>der/die/das</i>: singular <b>-e</b>, plural <b>-en</b> (<i>die steigenden Preise</i>). <b>Sin artículo, plural: -e</b> (<i>steigende Mietpreise</i>). Con <i>ein</i>: masc. -er, neutro -es, fem. -e.`},
 neben:{grp:'fallos',n:'Verbo al final (Nebensatz)',e:'🔚',d:'weil, dass, ob, falls, wann, was…',
  rule:`En el <b>Nebensatz</b> el verbo conjugado va <b>al final</b>: <i>…weil ich arbeiten <u>muss</u></i>.<br>
  Pregunta indirecta: <i>Ich möchte wissen, <b>wann der Kurs beginnt</b>.</i><br>
  Si el Nebensatz va primero, el Hauptsatz arranca con el verbo: <i>Weil ich arbeite, <b>habe</b> ich keine Zeit.</i><br>
  Con modal: <i>…weil ich viele Sachen machen muss</i> (infinitivo + modal conjugado, al final).<br>
  Oración con <i>was</i>: <i>Was mir an dieser Stadt gefällt, sind die Leute.</i> (gefallen + dativo; <i>an</i> + Dat.)<br>
  <i>falls / wenn</i> = si, en caso de que.`},
 rel:{grp:'fallos',n:'Relativsätze',e:'🔗',d:'pronombre, caso, preposición, verbo final',
  rule:`El <b>género y número</b> vienen del sustantivo; el <b>caso</b>, de su función dentro de la oración de relativo.
  <table class="rt"><tr><th></th><th>m</th><th>f</th><th>n</th><th>pl</th></tr>
  <tr><td>Nom</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
  <tr><td>Akk</td><td>den</td><td>die</td><td>das</td><td>die</td></tr>
  <tr><td>Dat</td><td>dem</td><td>der</td><td>dem</td><td>denen</td></tr></table>
  Con preposición: <i>der Kurs, <b>an dem</b> ich teilnehme</i>. Coma antes y después. <b>Verbo al final</b>: <i>die sehr teuer <u>waren</u></i> (no lo olvides).<br>
  Separar en dos Hauptsätze: <i>Ich nehme derzeit an dem Deutschkurs teil.</i> (sujeto + verbo en 2.ª posición; teilnehmen es separable).`},
 pos2:{grp:'fallos',n:'deshalb / denn (causa y efecto)',e:'↔️',d:'posición del verbo y lógica',
  rule:`<b>deshalb</b> = por eso. Ocupa la posición 1 y el verbo va en la <b>2</b>: <i>deshalb <b>lernt</b> sie</i>.<br>
  <b>denn</b>: posición 0, orden normal: <i>denn das Wetter ist schlecht</i>.<br>
  <b>weil</b>: verbo al final.<br>
  Lógica: <i>[causa], deshalb [consecuencia]</i>. "Der Chef war krank, deshalb wurde der Termin verschoben." Invertir causa y efecto es error.`},
 konj:{grp:'fallos',n:'Konjunktiv II (cortesía)',e:'🙏',d:'preguntas y peticiones corteses',
  rule:`Cortesía: <b>könnte / könnten / dürfte / würde</b> + infinitivo <b>al final</b>.<br>
  <i>Könnten Sie mir bitte helfen? · Dürfte ich Sie kurz sprechen? · Würde es Ihnen passen?</i><br>
  Con verbos que no son modales usa <b>würde + infinitivo</b>. "Passt es Ihnen" es Präsens y "Gab Sie" es Präteritum: <b>ninguno es Konjunktiv II</b>.<br>
  Pregunta indirecta: <i>Könnten Sie mir sagen, wann der Kurs beginnt?</i>`},
 prep:{grp:'fallos',n:'Preposiciones',e:'📌',d:'verbos con preposición fija y otras',
  rule:`<i>sich interessieren <b>für</b></i> · <i>teilnehmen <b>an</b></i> · <i>warten <b>auf</b></i> · <i>sprechen <b>mit</b> jdm <b>über</b> etw</i> · <i>sich freuen <b>auf</b></i> · <i>denken <b>an</b></i> · <i>sich ärgern <b>über</b></i> · <i>sich bewerben <b>um</b></i> · <i>Angst haben <b>vor</b></i> · <i>abhängen <b>von</b></i> · <i>sich kümmern <b>um</b></i> · <i>erinnern <b>an</b></i>.<br>
  <b>vor</b> + Dat. = hace (<i>vor 200 Jahren</i>); <b>seit</b> = desde hace (sigue vigente). Agente de la pasiva: <b>von</b> + Dat. Fijo: <i>in einem Kontext</i>.`},
 damit:{grp:'fallos',n:'damit / um…zu',e:'🎯',d:'Finalsätze y sujeto',
  rule:`<b>um … zu</b> + infinitivo: mismo sujeto en las dos partes. <i>Ich lerne viel, um mein Studium abzuschließen.</i><br>
  <b>damit</b> + oración con verbo al final: sujetos distintos. <i>Meine Eltern arbeiten hart, damit sie uns mit der Miete helfen können.</i><br>
  Separables: <i>ab<b>zu</b>schließen</i>. <i>fit</i> es adjetivo: minúscula.`},
 kolloc:{grp:'fallos',n:'Colocaciones y léxico',e:'📚',d:'verbo + sustantivo, vocabulario de los textos',
  rule:`<i>das Stadtrecht erhalten · den Reichtum zeigen · als Gründungsjahr gelten · als Professor lehren · ein Wirtschaftsfaktor sein · Gewinne erzielen · Einfluss haben · weltberühmt werden · eine Heimat finden · Preise steigen</i>.<br>
  <i>in Brand geraten · Bücher retten · schwer beschädigt · sich befinden · Einblicke geben · an etwas erinnern · zum Weltkulturerbe gehören</i>.`},
 attr:{grp:'fallos',n:'Ciudades como adjetivo (-er)',e:'🏙️',d:'Brandenburger Tor, Wiener Prater…',
  rule:`Ciudad + <b>-er</b>: siempre <b>-er</b>, con <b>mayúscula</b> y <b>no se declina</b> (ni en dativo): <i>das Brandenburger Tor, auf dem Wiener Prater</i>.<br>
  Casos: <i>Jena → Jenaer · Basel → Basler · Graz → Grazer · München → Münchner (Münchener) · Wien → Wiener · Rostock → Rostocker</i>.`},
 perf:{grp:'repaso',n:'Partizip II (Perfekt)',e:'⏪',d:'hat beantwortet, hat angerufen…',
  rule:`<b>Perfekt</b> = haben / sein + <b>Partizip II</b> al final.<br>
  Regular: <i>ge- + raíz + -t</i> (gemacht). Irregular: <i>gelesen, genommen, gegessen, gefunden</i>.<br>
  <b>Sin ge-:</b> inseparables (be-, ge-, er-, ver-, ent-, zer-) y verbos en -ieren: <i>beantwortet, besprochen, bezahlt, verpasst</i>.<br>
  <b>Separables:</b> ge- entre prefijo y raíz: <i>an<b>ge</b>rufen, teil<b>ge</b>nommen, aus<b>ge</b>wertet</i>. Si la raíz ya es inseparable no hay ge-: <i>vor<b>be</b>reitet</i>.`},
 pron:{grp:'repaso',n:'Pronombres Akkusativ / Dativ',e:'👤',d:'mir/mich, dir/dich, Ihnen, uns…',
  rule:`<table class="rt"><tr><th></th><th>Akk</th><th>Dat</th></tr>
  <tr><td>ich</td><td>mich</td><td>mir</td></tr><tr><td>du</td><td>dich</td><td>dir</td></tr>
  <tr><td>er</td><td>ihn</td><td>ihm</td></tr><tr><td>sie (ella)</td><td>sie</td><td>ihr</td></tr>
  <tr><td>wir</td><td>uns</td><td>uns</td></tr><tr><td>ihr</td><td>euch</td><td>euch</td></tr>
  <tr><td>sie (ellos)</td><td>sie</td><td>ihnen</td></tr><tr><td>Sie (usted)</td><td>Sie</td><td>Ihnen</td></tr></table>
  <b>Dativ:</b> helfen, danken, gehören, gefallen, antworten; la persona en <i>schicken, geben, erklären</i>. <b>Akkusativ:</b> anrufen, treffen, einladen, besuchen.`},
 modal:{grp:'repaso',n:'Modalverben',e:'🧰',d:'müssen, dürfen, können, sollen, wollen',
  rule:`<b>müssen</b> obligación · <b>dürfen</b> permiso (<i>nicht dürfen</i> = prohibido) · <b>können</b> posibilidad / capacidad · <b>sollen</b> consejo o encargo de otro · <b>wollen</b> plan / deseo.<br>
  Conjugación: <i>ich muss, du musst, er muss, wir müssen, ihr müsst</i> · <i>ich darf, du darfst</i> · <i>ich soll, du sollst</i> · <i>ich will, du willst</i>.<br>
  El infinitivo va al final. Cortesía: <i>könnte, dürfte</i>.`}
};
const TOPICS=['adj','neben','rel','pos2','konj','prep','damit','kolloc','attr','perf','pron','modal'];

/* ============ BANCO DE EJERCICIOS ============ */
const F=(t,q,a,why,o={})=>({type:'fill',topic:t,q,a:[].concat(a),why,...o});
const C=(t,q,opts,why,o={})=>({type:'choice',topic:t,q,opts,why,...o}); /* opts[0] es la correcta */
const O=(t,q,a,why,o={})=>({type:'order',topic:t,q,a,why,alts:[],...o}); /* la 1.ª palabra se da puesta; la puntuación no cuenta */

const ITEMS=[
/* ---------- adj: Partizip I / II como adjetivo ---------- */
F('adj','das von Goethe ___ Haus (bewohnen → Partizip II)','bewohnte','Partizip II de bewohnen + neutro con artículo (das) → <b>-e</b>.',{hot:1}),
F('adj','der zwischen 1969 und 1972 ___ Uniturm (entstehen)','entstandene','entstehen es irregular: entstand → <b>entstanden</b>; masculino con artículo → -e.',{hot:1}),
F('adj','die bei einem Brand ___ Bücher (beschädigen)','beschädigten','Partizip II <i>beschädigt</i> + plural con artículo → <b>-en</b>. Una sola terminación, no "beschädigenen".',{hot:1}),
F('adj','die 1846 ___ Firma (gründen)','gegründete','gründen → <i>gegründet</i> + femenino con artículo → <b>-e</b>.',{hot:1}),
F('adj','die ___ Bibliothek (restaurieren)','restaurierte','Los verbos en -ieren no llevan <i>ge-</i>. Femenino → -e.'),
F('adj','das von der Universität ___ Gebäude (nutzen)','genutzte','nutzen → <i>genutzt</i> + neutro con artículo → -e.',{hot:1}),
F('adj','sich positiv ___ Besucherzahlen (entwickeln → Partizip I)','entwickelnde','Plural <b>sin artículo</b> en nominativo → <b>-e</b>, no -en.',{hot:1}),
F('adj','zu den historischen Sehenswürdigkeiten ___ Gebäude (zählen → Partizip I)','zählende','Plural sin artículo → <b>-e</b>.',{hot:1}),
F('adj','___ Mietpreise (steigen → Partizip I)','steigende','Plural sin artículo → <b>-e</b>.',{hot:1}),
F('adj','eine aus dem Jahr 1534 ___ Bibel (stammen → Partizip I)','stammende','Partizip I = stammen + d; femenino con <i>eine</i> → -e.'),
F('adj','eine ___ Stadt (boomen → Partizip I)','boomende','boomen + d + -e (femenino con eine).'),
F('adj','Was mir nicht gefällt, sind die ___ Orte. (unsauber)','unsauberen','Plural con artículo (die) → <b>-en</b>. "unsauber" solo no basta: necesita terminación.',{hot:1}),
C('adj','Das erst 1985 von Historikern ___ Museum …',['konzipierte','konzipierten','konzipiertes'],'<i>das … Museum</i> es neutro nominativo con artículo definido → <b>-e</b>.',{hot:1}),
C('adj','Das sind die ___ Mietpreise.',['steigenden','steigende','steigend'],'<b>Con artículo (die)</b> el plural lleva -en. Compara: <i>steigende Mietpreise</i> (sin artículo).',{hot:1}),
C('adj','Das Haus wurde renoviert. → das ___ Haus',['renovierte','renovierende','renoviertes'],'Pasiva / acción terminada → <b>Partizip II</b>; neutro con artículo → -e.'),
C('adj','Die Preise steigen. → die ___ Preise',['steigenden','gestiegend','steigende'],'Acción en curso → <b>Partizip I</b> (steigend-); con artículo y plural → -en.'),

/* ---------- neben: verbo al final ---------- */
O('neben','Ordena: Aprendo alemán todos los días porque quiero aprobar el examen.','Ich lerne jeden Tag Deutsch, weil ich die Prüfung bestehen möchte.','Tras <i>weil</i> el verbo conjugado (<i>möchte</i>) va al final.',{hot:1,alts:['Ich lerne Deutsch jeden Tag, weil ich die Prüfung bestehen möchte.']}),
O('neben','Ordena: Hoy no puedo ir con ustedes porque tengo que trabajar.','Ich kann heute nicht mitkommen, weil ich arbeiten muss.','Modal conjugado al final: <i>arbeiten muss</i>.',{hot:1}),
O('neben','Ordena: Quiero saber cuándo empieza el curso.','Ich möchte wissen, wann der Kurs beginnt.','Pregunta indirecta: <i>wann</i> abre un Nebensatz y <i>beginnt</i> va al final.',{hot:1}),
O('neben','Ordena: Me mudé porque la ciudad me parece bonita.','Ich bin umgezogen, weil ich die Stadt schön finde.','Verbo al final tras <i>weil</i>.',{hot:1}),
O('neben','Ordena: La plaza es importante porque aquí desempeña un gran papel.','Die Plaza ist wichtig, weil sie hier eine große Rolle spielt.','<i>spielt</i> va al final, y el sujeto <i>sie</i> antes del resto.',{hot:1}),
O('neben','Ordena: Lo que me gusta de esta ciudad es la gente y la comida.','Was mir an dieser Stadt gefällt, sind die Leute und das Essen.','<i>Was mir … gefällt</i> es un Nebensatz: verbo al final. <i>gefallen + Dat.</i>, <i>an + Dat.</i>',{hot:1,alts:['Was mir an dieser Stadt gefällt, sind das Essen und die Leute.']}),
O('neben','Ordena: Lo que no me gusta son el ruido y los lugares sucios.','Was mir nicht gefällt, sind der Lärm und die schmutzigen Orte.','Mismo patrón: <i>Was mir nicht gefällt, sind…</i>',{hot:1,alts:['Was mir nicht gefällt, sind die schmutzigen Orte und der Lärm.']}),
O('neben','Ordena: No sé si el jefe viene hoy.','Ich weiß nicht, ob der Chef heute kommt.','<i>ob</i> introduce un Nebensatz: <i>kommt</i> al final.',{alts:['Ich weiß nicht, ob heute der Chef kommt.']}),
O('neben','Ordena: Él dice que mañana no tiene tiempo.','Er sagt, dass er morgen keine Zeit hat.','<i>dass</i> → verbo al final.'),
O('neben','Ordena: Necesito un portátil nuevo porque el viejo ya no funciona.','Ich brauche einen neuen Laptop, weil mein alter nicht mehr funktioniert.','<i>funktioniert</i> al final.'),
O('neben','Ordena: Como tengo que trabajar mucho, no tengo tiempo.','Weil ich viel arbeiten muss, habe ich keine Zeit.','Si el Nebensatz va primero, el verbo del Hauptsatz va justo después de la coma.'),
O('neben','Ordena: Tengo poco tiempo porque tengo que hacer muchas cosas.','Ich habe wenig Zeit, weil ich viele Sachen machen muss.','<i>machen muss</i> al final, no "ich muss viele Sachen machen".',{hot:1}),
O('neben','Ordena: ¿Puedes decirme dónde está la estación?','Kannst du mir sagen, wo der Bahnhof ist?','Pregunta indirecta con <i>wo</i> → verbo al final.'),
C('neben','Elige la frase correcta.',['Ich bleibe zu Hause, weil ich krank bin.','Ich bleibe zu Hause, weil ich bin krank.','Ich bleibe zu Hause, weil bin ich krank.'],'Verbo conjugado al final tras <i>weil</i>.'),
F('neben','Du kannst dir die Website ansehen, ___ es dich interessiert. (si / en caso de que)',['falls','wenn'],'<b>falls</b> / <b>wenn</b> introducen una condición y llevan el verbo al final.',{hot:1}),
F('neben','Ich weiß nicht, ___ er kommt. (si)','ob','<b>ob</b> = si (duda).'),
F('neben','Er hat gesagt, ___ er krank ist. (que)','dass','<b>dass</b> = que.'),

/* ---------- rel: Relativsätze ---------- */
F('rel','Das ist meine Nachbarin, ___ 12 Katzen hat.','die','Nachbarin es femenino y en el Relativsatz es sujeto → Nom. fem. = <b>die</b>.',{hot:1}),
F('rel','Ich habe viele Bücher gekauft, ___ sehr teuer waren.','die','Plural y sujeto → <b>die</b>.',{hot:1}),
F('rel','Der Mann meiner Nachbarin, ___ 10 Jahre älter ist als sie, ist schwerkrank.','der','Se refiere a <i>Mann</i> (no a Nachbarin) → masculino sujeto: <b>der</b>.'),
F('rel','Das Baby, ___ vor zwei Wochen geboren wurde, schläft den ganzen Tag.','das','Neutro sujeto → <b>das</b>.'),
F('rel','Meine Nichte, ___ in Leverkusen wohnt, fliegt übermorgen nach Ecuador.','die','Femenino sujeto → die.'),
F('rel','Die Bibliothek, ___ zum Weltkulturerbe gehört, ist berühmt.','die','Femenino sujeto → <b>die</b>. "deren" es genitivo (de la cual), no corresponde.',{hot:1}),
F('rel','Das Deutsche Historische Museum, ___ mit 7.000 Exponaten Einblicke in die Geschichte gibt, liegt in Berlin.','das','Neutro sujeto → <b>das</b>.',{hot:1}),
F('rel','Das Bauhaus-Museum, ___ an die Gründung des Bauhauses erinnert, ist neu.','das','Neutro sujeto → das.'),
F('rel','Die Universität, an ___ man Architektur studieren kann, ist alt.','der','<i>an</i> + dativo femenino → <b>der</b>.'),
F('rel','Der Deutschkurs, an ___ ich teilnehme, findet in Dortmund statt.','dem','<i>teilnehmen an</i> + dativo masculino → <b>dem</b>.',{hot:1}),
F('rel','Der Mann, ___ ich gestern gesehen habe, ist mein Chef.','den','Objeto directo (Akk) masculino → <b>den</b>.'),
F('rel','Die Frau, ___ ich helfe, ist nett.','der','<i>helfen</i> + Dativ; femenino → <b>der</b>.'),
F('rel','Die Stadt, in ___ ich wohne, ist schön.','der','<i>in</i> (lugar, Dat.) + femenino → der.'),
F('rel','Das Buch, ___ ich lese, ist spannend.','das','Objeto directo neutro → das.'),
F('rel','Die Kollegen, mit ___ ich arbeite, sind nett.','denen','Dativo plural → <b>denen</b>.'),
F('rel','Ich habe Bücher gekauft, die sehr teuer ___. (sein, Präteritum)','waren','En el Relativsatz el verbo va <b>al final</b>. No lo omitas.',{hot:1}),
O('rel','Une con un Relativsatz: Das ist meine nette Nachbarin. Sie hat 12 Katzen und 7 Kater.','Das ist meine nette Nachbarin, die 12 Katzen und 7 Kater hat.','Relativsatz con verbo final: <i>…Kater hat</i>.'),
O('rel','Une con un Relativsatz: Der Deutschkurs findet in Dortmund statt. Ich nehme derzeit an dem Deutschkurs teil.','Der Deutschkurs, an dem ich derzeit teilnehme, findet in Dortmund statt.','<i>an dem</i> + verbo final dentro del Relativsatz.',{hot:1}),
O('rel','Une con un Relativsatz: Angela Merkel ist eine promovierte Physikerin. Sie war von 2005 bis 2021 Bundeskanzlerin.','Angela Merkel, die von 2005 bis 2021 Bundeskanzlerin war, ist eine promovierte Physikerin.','Relativo femenino sujeto → <i>die</i>; <i>war</i> al final. Ojo: <i>promoviert</i> (con -ie-).',{hot:1,alts:['Angela Merkel ist eine promovierte Physikerin, die von 2005 bis 2021 Bundeskanzlerin war.']}),
O('rel','Une con un Relativsatz: Das neue iPhone ist nicht besser als das alte. Es kostet 1.200 €.','Das neue iPhone, das 1.200 € kostet, ist nicht besser als das alte.','Neutro sujeto → <i>das</i>.'),
O('rel','Une con un Relativsatz: Ich kaufe nur Getränke in Glasflaschen. Die Glasflaschen sind besser für die Umwelt.','Ich kaufe nur Getränke in Glasflaschen, die besser für die Umwelt sind.','Plural → <i>die</i>; <i>sind</i> al final.',{alts:['Ich kaufe Getränke nur in Glasflaschen, die besser für die Umwelt sind.']}),
O('rel','Separa en dos Hauptsätze: Der Deutschkurs, an dem ich derzeit teilnehme, findet in Dortmund statt.','Der Deutschkurs findet in Dortmund statt. Ich nehme derzeit an dem Deutschkurs teil.','Cada oración con el verbo en 2.ª posición; <i>teilnehmen</i> es separable: <i>nehme … teil</i>.',{hot:1,alts:['Der Deutschkurs findet in Dortmund statt. An dem Deutschkurs nehme ich derzeit teil.','Der Deutschkurs findet in Dortmund statt. Ich nehme an dem Deutschkurs derzeit teil.','Der Deutschkurs findet in Dortmund statt. Derzeit nehme ich an dem Deutschkurs teil.']}),
O('rel','Separa en dos Hauptsätze: Das ist mein lieber Vater, der seit 20 Jahren bei Siemens arbeitet.','Das ist mein lieber Vater. Mein Vater arbeitet seit 20 Jahren bei Siemens.','Cada parte con verbo en 2.ª posición.',{alts:['Das ist mein lieber Vater. Mein Vater arbeitet bei Siemens seit 20 Jahren.']}),

/* ---------- pos2: deshalb / denn ---------- */
O('pos2','Ordena: Ella quiere estudiar en Alemania, por eso aprende alemán intensivamente.','Sie möchte in Deutschland studieren, deshalb lernt sie intensiv Deutsch.','Tras <i>deshalb</i> el verbo va en 2.ª posición: <i>deshalb lernt sie</i>.',{hot:1,alts:['Sie möchte in Deutschland studieren, deshalb lernt sie Deutsch intensiv.']}),
O('pos2','Ordena: El jefe estaba enfermo, por eso se aplazó la cita.','Der Chef war krank, deshalb wurde der Termin verschoben.','Causa primero (<i>Chef krank</i>), consecuencia después con <i>deshalb</i>.',{hot:1}),
O('pos2','Ordena: El curso se cancela hoy, pues la profesora está enferma.','Der Kurs fällt heute aus, denn die Lehrerin ist krank.','<i>denn</i> no cambia el orden de la oración.'),
O('pos2','Ordena: Hoy nos quedamos en casa, pues hace mal tiempo.','Wir bleiben heute zu Hause, denn das Wetter ist schlecht.','<i>denn</i> + orden normal (verbo en 2.ª posición).'),
O('pos2','Ordena: Estudió mucho, por eso aprobó el examen.','Er hat viel gelernt, deshalb hat er die Prüfung bestanden.','<i>deshalb hat er</i>: verbo conjugado en 2.ª posición.'),
O('pos2','Ordena: No tengo dinero, por eso no puedo viajar.','Ich habe kein Geld, deshalb kann ich nicht reisen.','Modal en 2.ª posición, infinitivo al final.'),
C('pos2','Der Termin wurde verschoben. Der Chef war krank. ¿Cuál es lógica?',['Der Chef war krank, deshalb wurde der Termin verschoben.','Der Termin wurde verschoben, deshalb war der Chef krank.','Der Chef war krank, deshalb der Termin wurde verschoben.'],'Después de <i>deshalb</i> va la <b>consecuencia</b>. La causa es la enfermedad del jefe.',{hot:1,spot:1}),
C('pos2','Elige la frase correcta.',['Ich bin müde, deshalb gehe ich ins Bett.','Ich bin müde, deshalb ich gehe ins Bett.','Ich bin müde, deshalb ich ins Bett gehe.'],'<i>deshalb</i> + verbo + sujeto.'),
C('pos2','Elige la frase correcta con <i>denn</i>.',['Ich lerne Deutsch, denn ich möchte in Deutschland arbeiten.','Ich lerne Deutsch, denn möchte ich in Deutschland arbeiten.','Ich lerne Deutsch, denn ich in Deutschland arbeiten möchte.'],'<i>denn</i> conecta Hauptsätze: orden normal.'),
F('pos2','Es ist spät, deshalb ___ ich nach Hause. (gehen)','gehe','Verbo conjugado justo tras <i>deshalb</i>: deshalb <b>gehe</b> ich.'),
F('pos2','Er ist krank, ___ bleibt er im Bett. (por eso)','deshalb','<b>deshalb</b> = por eso (conector de consecuencia).'),

/* ---------- konj: Konjunktiv II ---------- */
O('konj','Ordena: ¿Podría ayudarme, por favor?','Könnten Sie mir bitte helfen?','<i>Könnten</i> + sujeto … infinitivo al final.'),
O('konj','Ordena: ¿Podría decirme cuándo empieza el curso?','Könnten Sie mir sagen, wann der Kurs beginnt?','Primero <i>sagen</i>, luego el Nebensatz con verbo final.',{hot:1}),
O('konj','Ordena: ¿Podría conseguir una cita, por favor?','Könnte ich bitte einen Termin bekommen?','<i>Könnte ich … bekommen?</i>',{alts:['Könnte ich einen Termin bitte bekommen?']}),
O('konj','Ordena: ¿Podría enviar el correo otra vez?','Könnten Sie die E-Mail noch einmal schicken?','Modal + infinitivo al final.',{alts:['Könnten Sie noch einmal die E-Mail schicken?']}),
O('konj','Ordena (Konjunktiv II con werden): ¿Le vendría bien mañana a las 10?','Würde es Ihnen morgen um 10 Uhr passen?','<i>passen</i> no es modal: <b>würde + infinitivo</b>.',{hot:1}),
O('konj','Ordena: ¿Podría darme un consejo?','Könnten Sie mir einen Tipp geben?','Con <i>geben</i> usa <b>könnten + geben</b>. "Gab" es Präteritum, no cortesía.',{hot:1}),
O('konj','Ordena: ¿Podría hablar un momento con usted?','Dürfte ich Sie kurz sprechen?','<i>dürfte</i> = muy cortés.'),
O('konj','Ordena: ¿Me daría la dirección, por favor?','Würden Sie mir bitte die Adresse geben?','<i>würden</i> + infinitivo al final.',{alts:['Würden Sie mir die Adresse bitte geben?']}),
C('konj','¿Cuál es una petición cortés en Konjunktiv II?',['Könnten Sie mir einen Tipp geben?','Gab Sie mir einen Tipp?','Geben Sie mir einen Tipp?'],'"Gab" es Präteritum y "Geben" es Präsens. La cortesía usa <b>könnten / würden</b>.',{hot:1,spot:1}),
C('konj','¿Cuál usa Konjunktiv II para preguntar si le viene bien la cita?',['Würde es Ihnen morgen um 10 Uhr passen?','Passt es Ihnen morgen um 10 Uhr?','Passen es Ihnen morgen um 10 Uhr?'],'<i>Passt</i> es Präsens. Konjunktiv II: <i>würde … passen</i>.',{hot:1,spot:1}),
F('konj','___ Sie mir bitte helfen? (können, Konjunktiv II)','Könnten','können → <b>könnten</b> (Sie).'),
F('konj','___ ich Sie kurz sprechen? (dürfen, Konjunktiv II)','Dürfte','dürfen → <b>dürfte</b> (ich).'),
F('konj','___ du mir bitte helfen? (können, Konjunktiv II)','Könntest','können → <b>könntest</b> (du).'),
F('konj','___ es Ihnen morgen passen? (werden, Konjunktiv II)','Würde','werden → <b>würde</b> (es).'),

/* ---------- prep: preposiciones ---------- */
F('prep','Ich interessiere mich sehr ___ diesen Sprachkurs.','für','<i>sich interessieren <b>für</b></i> + Akk.',{hot:1}),
F('prep','Er nimmt ___ der Besprechung teil.','an','<i>teilnehmen <b>an</b></i> + Dativ.',{hot:1}),
F('prep','Wir warten ___ den Bus vor dem Bahnhof.','auf','<i>warten <b>auf</b></i> + Akk.'),
F('prep','Morgen spreche ich mit meiner Lehrerin ___ die Prüfung.','über','<i>sprechen mit jdm <b>über</b> etw</i>.'),
F('prep','Sie fährt morgen ___ ihrer Freundin nach Köln.','mit','<i>mit</i> = acompañante.'),
F('prep','Ich freue mich ___ das Wochenende.','auf','<i>sich freuen <b>auf</b></i> (algo futuro).'),
F('prep','Er denkt oft ___ seine Familie.','an','<i>denken <b>an</b></i>.'),
F('prep','Ich ärgere mich ___ den Lärm.','über','<i>sich ärgern <b>über</b></i>.'),
F('prep','Sie hat sich ___ die Stelle beworben.','um','<i>sich bewerben <b>um</b></i>.'),
F('prep','Das hängt ___ dem Wetter ab.','von','<i>abhängen <b>von</b></i>.'),
F('prep','Ich habe Angst ___ der Prüfung.','vor','<i>Angst haben <b>vor</b></i>.'),
F('prep','Ich kümmere mich ___ meine Oma.','um','<i>sich kümmern <b>um</b></i>.'),
F('prep','Das Museum erinnert ___ die Gründung des Bauhauses.','an','<i>erinnern <b>an</b></i>.',{hot:1}),
F('prep','Die deutsche Geschichte wird ___ einem internationalen Kontext präsentiert.','in','Expresión fija: <b>in</b> einem Kontext. No "über".',{hot:1}),
F('prep','Die Bibliothek wurde ___ 200 Jahren von dem berühmten Dichter Goethe geleitet. (hace 200 años)','vor','<b>vor</b> + Dat. = hace (pasado). <i>seit</i> sería "desde hace" y pide presente.',{hot:1}),
F('prep','Die Bibliothek wurde vor 200 Jahren ___ dem berühmten Dichter Goethe geleitet.','von','En la pasiva, quien actúa se expresa con <b>von</b> + Dativ.',{hot:1}),

/* ---------- damit: damit / um … zu ---------- */
O('damit','Ordena (um … zu): Estudio mucho para terminar mis estudios.','Ich lerne viel, um mein Studium abzuschließen.','Mismo sujeto → <i>um … zu</i>. Separable: <i>ab<b>zu</b>schließen</i>.',{hot:1}),
O('damit','Ordena (um … zu): Él come sano para seguir en forma.','Er ernährt sich gesund, um fit zu bleiben.','<i>fit</i> en minúscula (adjetivo).',{hot:1}),
O('damit','Ordena (damit): Vemos películas en alemán para mejorar nuestro alemán.','Wir schauen Filme auf Deutsch, damit wir unser Deutsch verbessern.','<i>damit</i> + verbo al final.',{hot:1}),
O('damit','Ordena (damit): Mis padres trabajan duro para poder ayudarnos con el alquiler.','Meine Eltern arbeiten hart, damit sie uns mit der Miete helfen können.','<i>damit</i> + sujeto <i>sie</i> + verbos al final; <i>können</i> en plural.',{hot:1}),
O('damit','Ordena (um … zu): Aprendo alemán para trabajar en Alemania.','Ich lerne Deutsch, um in Deutschland zu arbeiten.','<i>um … zu</i>: <i>zu</i> justo antes del infinitivo.'),
O('damit','Ordena (damit): Ella ahorra para que sus hijos puedan estudiar.','Sie spart Geld, damit ihre Kinder studieren können.','Sujetos distintos (sie / ihre Kinder) → damit.'),
C('damit','Er arbeitet viel, ___ seine Familie ein gutes Leben hat.',['damit','um … zu'],'Sujetos distintos (er / seine Familie) → <b>damit</b>.'),
C('damit','Ich gehe früh ins Bett, ___ morgen fit zu sein.',['um … zu','damit'],'Mismo sujeto (ich) → <b>um … zu</b>.'),
F('damit','Er ernährt sich gesund, um ___ zu bleiben. (en forma)','fit','Es un adjetivo: va en minúscula.',{hot:1}),
F('damit','Ich lerne viel, um mein Studium ___. (abschließen con zu)','abzuschließen','ab + <b>zu</b> + schließen, escrito junto: <i>abzuschließen</i>.',{hot:1}),

/* ---------- kolloc: colocaciones y léxico ---------- */
C('kolloc','Jena: das Stadtrecht ___',['erhalten','gelten','lehren','sein'],'<b>das Stadtrecht erhalten</b> = recibir los derechos de ciudad.'),
C('kolloc','Jena: den Reichtum der Stadt ___',['zeigen','gelten','lehren','sein'],'<b>den Reichtum zeigen</b> = mostrar la riqueza.',{hot:1}),
C('kolloc','Jena: als offizielles Gründungsjahr der Universität ___',['gelten','erzielen','werden','steigen'],'<b>als … gelten</b> = valer / considerarse como.',{hot:1}),
C('kolloc','Jena: als Professor an einer Universität ___',['lehren','erzielen','haben','zeigen'],'<b>lehren</b> = dar clases.',{hot:1}),
C('kolloc','Jena: ein wichtiger Wirtschaftsfaktor ___',['sein','erzielen','haben','finden'],'<b>sein</b> = ser.'),
C('kolloc','Jena: wirtschaftliche Gewinne ___ (obtener)',['erzielen','lehren','gelten','sein'],'<b>Gewinne erzielen</b> = obtener beneficios.',{hot:1}),
C('kolloc','Jena: Einfluss auf die wirtschaftliche Entwicklung ___',['haben','gelten','lehren','werden'],'<b>Einfluss haben</b> (auf + Akk.).'),
C('kolloc','Jena: unter dem Namen Carl Zeiss Jena weltberühmt ___ (llegar a ser)',['werden','lehren','erhalten','steigen'],'<b>weltberühmt werden</b> = hacerse famoso en el mundo (proceso).',{hot:1}),
C('kolloc','Jena: eine neue Heimat in Jena ___',['finden','erzielen','steigen','gelten'],'<b>eine Heimat finden</b>.'),
C('kolloc','Jena: die Mietpreise ___',['steigen','gelten','erhalten','lehren'],'<b>steigen</b> = subir.'),
C('kolloc','Weimar, die in der Nähe von Jena ___',['liegt','klingt','gehört','erinnert'],'<b>liegen</b> = estar situado. "klingt" = suena.',{hot:1}),
C('kolloc','Die Bibliothek geriet durch einen technischen Defekt in ___.',['Brand','Feuer','Rauch','Asche'],'Expresión fija: <b>in Brand geraten</b>.',{hot:1}),
F('kolloc','Die Feuerwehr konnte einige wichtige Bücher ___. (salvar)','retten','<b>retten</b> = salvar. Con <i>konnte</i> va en infinitivo.',{hot:1}),
F('kolloc','62.000 Bände wurden zum Teil schwer ___. (dañar, Partizip II)','beschädigt','Pasiva con Partizip II: <b>beschädigt</b>.',{hot:1}),
F('kolloc','In der Mitte von Berlin ___ sich das Museum. (estar situado)','befindet','<b>sich befinden</b> = encontrarse.',{hot:1}),
C('kolloc','Das Museum ___ Einblicke in die Geschichte Deutschlands.',['gibt','hat','liegt'],'<b>Einblicke geben</b> = ofrecer una visión.',{hot:1}),
F('kolloc','eine kulinarische ___ (especialidad)','Spezialität','Die <b>Spezialität</b> = especialidad.'),
F('kolloc','Die Bibliothek gehört zum ___ der UNESCO. (patrimonio mundial)','Weltkulturerbe','das <b>Weltkulturerbe</b>.'),

/* ---------- attr: ciudades como adjetivo ---------- */
F('attr','das ___ Tor (Brandenburg)','Brandenburger','Ciudad + <b>-er</b>, mayúscula, sin declinar.',{hot:1}),
F('attr','der ___ Fischmarkt (Rostock)','Rostocker','Ciudad + -er.',{hot:1}),
F('attr','das ___ Oktoberfest (München)',['Münchner','Münchener'],'Ciudad + -er (München → Münchner).',{hot:1}),
F('attr','das Riesenrad auf dem ___ Prater (Wien)','Wiener','Ciudad + -er; no se declina aunque sea dativo.',{hot:1}),
F('attr','das ___ Kunsthaus (Graz)','Grazer','Ciudad + -er.',{hot:1}),
F('attr','das ___ Münster (Basel)','Basler','Basel → <b>Basler</b> (no "Baseler").',{hot:1}),
F('attr','der ___ Uniturm (Jena)','Jenaer','Jena → <b>Jenaer</b>.',{hot:1}),
F('attr','Kennst du den ___ Dom? (Köln)','Kölner','Ciudad + -er.'),
F('attr','Wir essen im ___ Hofbräuhaus. (München)',['Münchner','Münchener'],'Ciudad + -er; no se declina.'),
C('attr','Elige la forma correcta.',['das Wiener Riesenrad','das wiener Riesenrad','das Wienerr Riesenrad'],'Ciudad + -er, siempre con <b>mayúscula</b>.'),
C('attr','Elige la forma correcta.',['auf dem Wiener Prater','auf dem Wienern Prater','auf dem Wienen Prater'],'La forma <b>-er</b> no se declina, ni siquiera en dativo.'),

/* ---------- perf: Partizip II en el Perfekt ---------- */
F('perf','Frau Schneider hat gestern viele E-Mails ___. (beantworten)','beantwortet','<i>be-</i> es inseparable: sin <i>ge-</i>.'),
F('perf','Am Vormittag hat sie an einer Besprechung ___. (teilnehmen)','teilgenommen','Separable: teil + <b>ge</b> + nommen; nehmen es irregular (genommen).'),
F('perf','Danach hat sie einen wichtigen Kunden ___. (anrufen)','angerufen','Separable: an + <b>ge</b> + rufen.'),
F('perf','Die Kollegen haben die neuen Termine ___. (besprechen)','besprochen','<i>be-</i> inseparable (sin ge-); sprechen es irregular → <i>sprochen</i>.'),
F('perf','Ich habe gestern einen interessanten Artikel ___. (lesen)','gelesen','Irregular: lesen → gelesen.'),
F('perf','Wir haben die Ergebnisse der Umfrage ___. (auswerten)','ausgewertet','Separable: aus + <b>ge</b> + wertet.'),
F('perf','Er hat die Rechnung noch nicht ___. (bezahlen)','bezahlt','<i>be-</i> inseparable (sin ge-): bezahlt.'),
F('perf','Am Abend habe ich meine Präsentation ___. (vorbereiten)','vorbereitet','vor + <i>bereiten</i> (be- inseparable) → <b>vorbereitet</b>, sin ge-.'),
F('perf','Wir haben gestern Pizza ___. (essen)','gegessen','Irregular: essen → gegessen.'),
F('perf','Sie hat das Buch im Regal ___. (finden)','gefunden','Irregular: finden → gefunden.'),
F('perf','Ich habe den Bus ___. (verpassen)','verpasst','<i>ver-</i> inseparable: verpasst.'),
F('perf','Er ist gestern nach Köln ___. (fahren)','gefahren','Verbo de movimiento: <i>ist gefahren</i>.'),
C('perf','Partizip II de <i>vorbereiten</i>:',['vorbereitet','vorgebereitet','gevorbereitet'],'La raíz <i>bereiten</i> ya empieza por be-, así que no hay ge-.'),
C('perf','Partizip II de <i>auswerten</i>:',['ausgewertet','auswertet','geauswertet'],'Separable: ge- va entre el prefijo y la raíz: aus<b>ge</b>wertet.'),

/* ---------- pron: pronombres Akk / Dat ---------- */
F('pron','Kannst du ___ bitte helfen? (ich)','mir','<i>helfen</i> + Dativ → <b>mir</b>.'),
F('pron','Der Chef hat ___ gestern angerufen. (ich)','mich','<i>anrufen</i> + Akkusativ → <b>mich</b>.'),
F('pron','Ich schicke ___ die Unterlagen heute noch. (Sie)','Ihnen','<i>schicken</i> + persona en Dativ → <b>Ihnen</b> (con mayúscula, usted).'),
F('pron','Können Sie ___ bitte die Adresse geben? (ich)','mir','<i>geben</i> + persona en Dativ → <b>mir</b>.'),
F('pron','Wir treffen ___ morgen vor dem Büro. (sie = Frau Müller)','sie','<i>treffen</i> + Akkusativ; ella → <b>sie</b>.'),
F('pron','Der Kollege erklärt ___ das Problem. (wir)','uns','<i>erklären</i> + persona en Dativ → <b>uns</b> (Dat. y Akk. coinciden).'),
F('pron','Ich möchte ___ gern zu unserem Treffen einladen. (du)','dich','<i>einladen</i> + Akkusativ → <b>dich</b>.'),
F('pron','Ich danke ___ für die Hilfe. (du)','dir','<i>danken</i> + Dativ → <b>dir</b>.'),
F('pron','Wir besuchen ___ am Wochenende. (ihr)','euch','<i>besuchen</i> + Akkusativ → <b>euch</b>.'),
F('pron','Das Buch gehört ___. (er)','ihm','<i>gehören</i> + Dativ → <b>ihm</b>.'),
F('pron','Der Film gefällt ___ sehr. (sie = ella)','ihr','<i>gefallen</i> + Dativ → <b>ihr</b>.'),

/* ---------- modal: Modalverben ---------- */
F('modal','Du ___ heute noch lernen, wenn du morgen die Prüfung schreiben willst. (müssen)','musst','müssen con <i>du</i>: <b>musst</b> (no "muss").'),
F('modal','Hier ___ Sie nicht rauchen. Das ist verboten. (dürfen)','dürfen','<i>nicht dürfen</i> = prohibido.'),
F('modal','___ ich Sie morgen zurückrufen? Ich habe heute leider keine Zeit. (können, cortés)','Könnte','Konjunktiv II de können para pedir permiso con cortesía.'),
F('modal','Der Arzt sagt, ich ___ viel Wasser trinken. (sollen)','soll','<b>sollen</b> = consejo o encargo de otra persona. ich → <i>soll</i>.'),
F('modal','Wir ___ nächstes Jahr einen Sprachkurs besuchen. Das ist unser Plan. (wollen)','wollen','<b>wollen</b> = plan o intención.'),
F('modal','Man ___ mit einem guten Abschluss bessere Chancen auf dem Arbeitsmarkt haben. (können)','kann','<b>können</b> = posibilidad. man → <i>kann</i>.'),
F('modal','Er ___ heute leider lange arbeiten. (müssen)','muss','müssen con <i>er</i>: <b>muss</b>.'),
F('modal','Ihr ___ hier nicht parken. (dürfen)','dürft','dürfen con <i>ihr</i>: <b>dürft</b>.'),
F('modal','Ich ___ gern Ärztin werden. (wollen)','will','wollen con <i>ich</i>: <b>will</b>.'),
C('modal','"Hier darf man nicht rauchen." significa…',['Está prohibido fumar aquí.','Es obligatorio fumar aquí.','Es posible fumar aquí.'],'<i>nicht dürfen</i> = prohibición.'),
];

/* ---------- Caza el error: opts[0] correcta, las otras dos son errores típicos ---------- */
const SPOT=[
['konj','Könnten Sie mir sagen, wann der Kurs beginnt?','Könnten Sie mir wann der Kurs beginnt sagen?','Könnten Sie mir sagen, wann beginnt der Kurs?','Después de <i>sagen</i> hay un Nebensatz con el verbo al final.'],
['pos2','Sie möchte in Deutschland studieren, deshalb lernt sie intensiv Deutsch.','Sie möchte in Deutschland studieren, deshalb sie intensiv Deutsch lernt.','Sie möchte in Deutschland studieren, deshalb sie lernt intensiv Deutsch.','Tras <i>deshalb</i>, el verbo va primero.'],
['neben','Ich bin umgezogen, weil ich die Stadt schön finde und ich viele Sachen machen muss.','Ich bin umgezogen, weil ich die Stadt schön finde und ich muss viele Sachen machen.','Ich bin umgezogen, weil ich die Stadt schön finde und muss ich viele Sachen machen.','Con <i>und</i> el segundo verbo sigue dentro del Nebensatz: al final.'],
['neben','Die Plaza ist wichtig, weil sie hier eine große Rolle spielt.','Die Plaza ist wichtig, weil hier es spielt eine große Rolle.','Die Plaza ist wichtig, weil sie spielt hier eine große Rolle.','Verbo al final tras <i>weil</i>.'],
['neben','Was mir an dieser Stadt gefällt, sind die Leute.','Was gefällt mir über diese Stadt, sind die Leute.','Was mir gefällt an dieser Stadt sind die Leute.','<i>Was mir … gefällt</i> es Nebensatz; <i>an dieser Stadt</i>; coma.'],
['adj','Das sind sich positiv entwickelnde Besucherzahlen.','Das sind sich positiv entwickelnden Besucherzahlen.','Das sind sich positiv entwickelte Besucherzahlen.','Plural sin artículo → -e.'],
['adj','Das sind die bei einem Brand beschädigten Bücher.','Das sind die bei einem Brand beschädigenen Bücher.','Das sind die bei einem Brand beschädigte Bücher.','Con artículo y plural → -en; sin doble terminación.'],
['rel','Ich habe Bücher gekauft, die sehr teuer waren.','Ich habe Bücher gekauft, die sehr teuer.','Ich habe Bücher gekauft, die waren sehr teuer.','No olvides el verbo final del Relativsatz.'],
['rel','Der Deutschkurs findet in Dortmund statt. Ich nehme derzeit an dem Deutschkurs teil.','Der Deutschkurs findet in Dortmund statt. Der Deutschkurs nehme ich an dem derzeit teil.','Der Deutschkurs findet in Dortmund statt. Der Deutschkurs nehme ich derzeit teil.','Cada Hauptsatz con verbo en 2.ª posición; <i>teilnehmen</i> es separable.'],
['prep','Ich interessiere mich für diesen Kurs.','Ich interessiere mich über diesen Kurs.','Ich interessiere mich an diesen Kurs.','<i>sich interessieren für</i>.'],
['prep','Er nimmt an der Besprechung teil.','Er nimmt von der Besprechung teil.','Er nimmt auf der Besprechung teil.','<i>teilnehmen an</i>.'],
['damit','Meine Eltern arbeiten hart, damit sie uns mit der Miete helfen können.','Meine Eltern arbeiten hart, damit sie uns mit der Miete helfen kann.','Meine Eltern arbeiten hart, um sie uns mit der Miete zu helfen.','<i>damit</i> + sujeto + verbo al final, y <i>können</i> en plural.'],
['pos2','Er hat viel gelernt, deshalb hat er die Prüfung bestanden.','Er hat viel gelernt, deshalb er hat die Prüfung bestanden.','Er hat viel gelernt, deshalb die Prüfung bestanden hat er.','<i>deshalb hat er</i>: verbo en 2.ª posición.'],
['kolloc','Die Bibliothek geriet in Brand.','Die Bibliothek geriet in Feuer.','Die Bibliothek geriet auf Brand.','Expresión fija: <i>in Brand geraten</i>.'],
];
SPOT.forEach(s=>ITEMS.push(C(s[0],'¿Cuál frase es correcta?',[s[1],s[2],s[3]],s[4],{hot:1,spot:1})));
ITEMS.forEach((it,i)=>it.id='i'+i);

/* ============ FEHLERHEFT: errores reales de las fotos ============ */
/* maybe:true = no pude leerlo con certeza en la foto */
const ERR=[
{t:'Kapiteltest',s:'3 · Konjunktiv II #2',topic:'konj',my:'Könnten Sie mir wann der Kurs beginnt sagen?',ok:'Könnten Sie mir sagen, wann der Kurs beginnt?',why:'<i>sagen</i> va antes de la oración con <i>wann</i>. En el Nebensatz el verbo (<i>beginnt</i>) va al final.'},
{t:'Kapiteltest',s:'3 · Konjunktiv II #5',topic:'konj',my:'Passt es Ihnen morgen um 10 Uhr?',ok:'Würde es Ihnen morgen um 10 Uhr passen?',why:'<i>Passt</i> es Präsens. Konjunktiv II con verbos normales: <b>würde + infinitivo</b>.'},
{t:'Kapiteltest',s:'3 · Konjunktiv II #6',topic:'konj',my:'Gab Sie mir einen Tipp?',ok:'Könnten Sie mir einen Tipp geben?',why:'<i>Gab</i> es Präteritum, no cortesía. Usa <b>könnten + infinitivo</b>.'},
{t:'Kapiteltest',s:'4 · Präpositionen #1',topic:'prep',my:'Ich interessiere mich sehr über diesen Sprachkurs.',ok:'Ich interessiere mich sehr für diesen Sprachkurs.',why:'<i>sich interessieren für</i>. La preposición es fija; no se deduce del español.'},
{t:'Kapiteltest',s:'4 · Präpositionen #4',topic:'prep',my:'Er nimmt von der Besprechung teil.',ok:'Er nimmt an der Besprechung teil.',why:'<i>teilnehmen an</i> + Dativ.'},
{t:'Kapiteltest',s:'5 · Kausalangaben #5',topic:'pos2',my:'Sie möchte in Deutschland studieren, deshalb sie intensiv Deutsch lernt.',ok:'Sie möchte in Deutschland studieren, deshalb lernt sie intensiv Deutsch.',why:'<i>deshalb</i> ocupa la posición 1; el verbo conjugado va en la <b>2</b>.'},
{t:'Kapiteltest',s:'5 · Kausalangaben #8',topic:'pos2',my:'Der Termin wurde verschoben, deshalb war der Chef krank.',ok:'Der Chef war krank, deshalb wurde der Termin verschoben.',why:'Causa y efecto invertidos. Después de <i>deshalb</i> va la consecuencia.'},
{t:'Kapiteltest',s:'6 · damit / um…zu #1–#3',topic:'damit',my:'abzuschliesen (ortografía) · damit … helfen kan (sin sujeto correcto y sin plural) · um Fit zu bleiben',ok:'abzuschließen · damit sie uns helfen können · um fit zu bleiben',why:'Cuida la forma: <i>abzuschließen</i> (ab+zu+schließen), plural <i>können</i>, y <i>fit</i> en minúscula. Sujeto distinto → damit.'},
{t:'Spektrum Kap. 5',s:'1 · Jena (verbos)',topic:'kolloc',my:'2 gelten · 3 erzielen · 4 werden · 6 zeigen · 8 lehren',ok:'2 zeigen · 3 gelten · 4 lehren · 6 erzielen · 8 werden',why:'Son <b>colocaciones</b>: den Reichtum zeigen, als Gründungsjahr gelten, als Professor lehren, Gewinne erzielen, weltberühmt werden.'},
{t:'Spektrum Kap. 5',s:'2 · Postkarte (1)',topic:'kolloc',my:'klingt',ok:'liegt',why:'<i>die in der Nähe von Jena liegt</i> = que está cerca de Jena. <i>klingt</i> significa "suena".',maybe:true},
{t:'Spektrum Kap. 5',s:'2 · Postkarte (3)',topic:'rel',my:'… Bibliothek besucht, deren zum Weltkulturerbe gehört',ok:'… Bibliothek besucht, die zum Weltkulturerbe gehört',why:'Femenino sujeto → <b>die</b>. <i>deren</i> es genitivo.'},
{t:'Spektrum Kap. 5',s:'2 · Postkarte (4)',topic:'prep',my:'seit 200 Jahren',ok:'vor 200 Jahren',why:'Pasado puntual: <b>vor</b> + Dat. = hace. <i>seit</i> = desde hace y pide presente.',maybe:true},
{t:'Spektrum Kap. 5',s:'2 · Postkarte (6) (7) (8)',topic:'kolloc',my:'(6) palabra incorrecta · (7) y (8) en blanco',ok:'(6) in Brand · (7) retten · (8) beschädigt',why:'Vocabulario del texto: <i>in Brand geraten</i>, <i>Bücher retten</i>, <i>schwer beschädigt</i>.'},
{t:'Spektrum Kap. 5',s:'2 · Postkarte (11)',topic:'neben',my:'(en blanco)',ok:'Du kannst dir die Website ansehen, falls es dich interessiert.',why:'<b>falls / wenn</b> = si / en caso de. Nebensatz con verbo final.'},
{t:'Spektrum Kap. 5',s:'3 · Orte als Attribute (0/3)',topic:'attr',my:'Brandenburger · Jenaer · Basler · Grazer · Wiener · Münchener',ok:'Ciudad + -er (Basler, Grazer, Wiener, Münchner)',why:'Todas salieron marcadas como incorrectas, pero tus formas se leen casi correctas. No puedo ver el motivo en la foto: pregunta al profesor. Mientras, practica la serie completa.',maybe:true},
{t:'Spektrum Kap. 5',s:'4a · Partizip II #1 y #4',topic:'adj',my:'entstehene · beschädigenen',ok:'entstandene · beschädigten',why:'<i>entstehen</i> es irregular (entstanden). En <i>beschädigten</i> solo una terminación.'},
{t:'Spektrum Kap. 5',s:'4b · Partizip I #1, #3, #4',topic:'adj',my:'entwickelnden · zählenden · steigenden',ok:'entwickelnde · zählende · steigende',why:'Plural <b>sin artículo</b> en nominativo → <b>-e</b>.'},
{t:'Spektrum Kap. 5',s:'5 · Museo (4) y (5)',topic:'adj',my:'konzipierten · über',ok:'konzipierte · in',why:'<i>das Museum</i> neutro con artículo → -e. <i>in einem … Kontext</i> es fijo.'},
{t:'Spektrum Kap. 5',s:'6 · E-Mail',topic:'neben',my:'… und ich muss viele Sachen machen. · … weil hier es spielt eine große Rolle. · Was gefällt mir über diese Stadt, sind … · die unsauber Orte',ok:'… und ich viele Sachen machen muss. · … weil sie hier eine große Rolle spielt. · Was mir an dieser Stadt gefällt, sind … · die unsauberen Orte',why:'Verbo al final en <i>weil</i> y en <i>was</i>-Sätzen. <i>Gefallen + Dat., an + Dat.</i> Adjetivos con terminación.'},
{t:'Relativsätze',s:'I · #2',topic:'rel',my:'Ich habe mir viele neue Bücher gekauft, die sehr teuer.',ok:'… gekauft, die sehr teuer waren.',why:'Falta el <b>verbo final</b> del Relativsatz.'},
{t:'Relativsätze',s:'II · #5',topic:'rel',my:'Der Deutschkurs findet in Dortmund statt. Der Deutschkurs nehme ich an dem derzeit teil.',ok:'Der Deutschkurs findet in Dortmund statt. Ich nehme derzeit an dem Deutschkurs teil.',why:'Segundo Hauptsatz: sujeto <i>ich</i>, verbo en 2.ª posición, <i>teilnehmen</i> separable.'},
{t:'Relativsätze',s:'II · #4',topic:'rel',my:'Angela Merkel ist eine promoviete Physikerin.',ok:'… ist eine promovierte Physikerin.',why:'Ortografía: <i>promoviert</i> (con -ie-).',maybe:true},
];
