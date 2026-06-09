import { Question } from '@/types';

export const questions: Question[] = [
  // ===== CATEGORY: VEHICLE (Ingingo z'Ibinyabiziga) =====
  {
    id: 1, category: 'vehicle',
    question: "Ikinyabiziga cyose cyangwa ibinyabiziga bigenda bigomba kugira:",
    options: [{ label: 'a', text: 'Umuyobozi' }, { label: 'b', text: 'Umuherekeza' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 2, category: 'vehicle',
    question: "Ijambo 'akayira' bivuga inzira nyabagendwa ifunganye yagenewe gusa:",
    options: [{ label: 'a', text: 'Abanyamaguru' }, { label: 'b', text: 'Ibinyabiziga bigendera ku biziga bibiri' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 3, category: 'vehicle',
    question: "Umurongo uciyemo uduce umenyesha ahegereye umurongo ushobora kuzuzwa n'uturanga gukata tw'ibara ryera utwo turanga cyerekezo tumenyesha:",
    options: [{ label: 'a', text: 'Igisate cy\'umuhanda abayobozi bagomba gukurikira' }, { label: 'b', text: 'Ahegereye umurongo ukomeje' }, { label: 'c', text: 'Igabanurwa ry\'umubare w\'ibisate by\'umuhanda mu cyerekezo bajyamo' }, { label: 'd', text: 'A na C nibyo' }],
    correctAnswer: 'c'
  },
  {
    id: 4, category: 'vehicle',
    question: "Ahantu ho kugendera mu muhanda herekanwa n'ibimenyetso bimurika ibinyabiziga ntibishobora kuhagenda:",
    options: [{ label: 'a', text: 'Biteganye' }, { label: 'b', text: 'Ku murongo umwe' }, { label: 'c', text: 'A na B nibyo' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 5, category: 'vehicle',
    question: "Ibinyabiziga bikurikira bigomba gukorerwa isuzumwa buri mwaka:",
    options: [{ label: 'a', text: 'Ibinyabiziga bigenewe gutwara abagenzi muri rusange' }, { label: 'b', text: 'Ibinyabiziga bigenewe gutwara ibintu birengeje toni 3.5' }, { label: 'c', text: 'Ibinyabiziga bigenewe kwigisha gutwara' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 6, category: 'vehicle',
    question: "Ubugari bwa romoruki ikuruwe n'ikinyamitende itatu ntibugomba kurenza ibipimo bikurikira:",
    options: [{ label: 'a', text: 'cm75' }, { label: 'b', text: 'cm125' }, { label: 'c', text: 'cm265' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri' }],
    correctAnswer: 'd'
  },
  {
    id: 7, category: 'vehicle',
    question: "Uburebure bw'ibinyabiziga bikurikira ntibugomba kurenga metero 11:",
    options: [{ label: 'a', text: 'Ibifite umutambiko umwe uhuza imipira' }, { label: 'b', text: 'Ibifite imitambiko ibiri ikurikiranye mu bugari bwayo' }, { label: 'c', text: 'Makuzungu' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri' }],
    correctAnswer: 'd'
  },
  {
    id: 8, category: 'vehicle',
    question: "Ikinyabiziga kibujijwe guhagarara akanya kanini aha hakurikira:",
    options: [{ label: 'a', text: 'Ahatarengeje metero 1 imbere cyangwa inyuma y\'ikinyabiziga gihagaze akanya gato cyangwa kanini' }, { label: 'b', text: 'Ahantu hari ibimenyetso bibuza byabugenewe' }, { label: 'c', text: 'Aho abanyamaguru banyura mu muhanda ngo bakikire inkomyi' }, { label: 'd', text: 'Ibisubizo byose nibyo' }],
    correctAnswer: 'd'
  },
  {
    id: 9, category: 'vehicle',
    question: "Kunyuranaho bikorerwa:",
    options: [{ label: 'a', text: 'Mu ruhande rw\'iburyo gusa' }, { label: 'b', text: 'Igihe cyose ni ibumoso' }, { label: 'c', text: 'Iburyo iyo unyura ku nyamaswa' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 10, category: 'vehicle',
    question: "Icyapa cyerekana umuvuduko ntarengwa ikinyabiziga kitagomba kurenza gishyirwa gusa ku binyabiziga bifite uburemere ntarengwa bukurikira:",
    options: [{ label: 'a', text: 'Burenga toni 1' }, { label: 'b', text: 'Burenga toni 2' }, { label: 'c', text: 'Burenga toni 24' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 11, category: 'vehicle',
    question: "Ahatari mu nsisiro umuvuduko ntarengwa mu isaha wa velomoteri ni:",
    options: [{ label: 'a', text: 'Km50' }, { label: 'b', text: 'Km40' }, { label: 'c', text: 'Km30' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri' }],
    correctAnswer: 'a'
  },
  {
    id: 12, category: 'vehicle',
    question: "Umuyobozi ugenda mu muhanda igihe ubugari bwawo budatuma anyuranaho nta nkomyi ashobora kunyura mu kayira k'abanyamaguru ariko amaze kureba ibi bikurikira:",
    options: [{ label: 'a', text: 'Umuvuduko w\'abanyamaguru' }, { label: 'b', text: 'Ubugari bw\'umuhanda' }, { label: 'c', text: 'Umubare w\'abanyamaguru' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 13, category: 'vehicle',
    question: "Ku byerekeye kwerekana ibinyabiziga n'ukumurika kwabyo, birabujijwe gukora andi matara cyangwa utugarurarumuri uretse ibitegetswe, ariko ntibireba amatara akurikira:",
    options: [{ label: 'a', text: 'Amatara ndanga' }, { label: 'b', text: 'Amatara ari imbere mu modoka' }, { label: 'c', text: 'Amatara ndangaburambarare' }, { label: 'd', text: 'Ibisubizo byose nibyo' }],
    correctAnswer: 'b'
  },
  {
    id: 14, category: 'vehicle',
    question: "Iyo nta mategeko awugabanya by'umwihariko umuvuduko ntarengwa w'amapikipiki mu isaha ni:",
    options: [{ label: 'a', text: 'Km25' }, { label: 'b', text: 'Km70' }, { label: 'c', text: 'Km40' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 15, category: 'vehicle',
    question: "Uburyo bukoreshwa kugirango ikinyabiziga kigende gahoro igihe feri idakora neza babwita:",
    options: [{ label: 'a', text: 'Feri y\'urugendo' }, { label: 'b', text: 'Feri yo guhagarara umwanya munini' }, { label: 'c', text: 'Feri yo gutabara' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 16, category: 'vehicle',
    question: "Nibura ikinyabiziga gitegetswe kugira uduhanagurakirahure tungahe:",
    options: [{ label: 'a', text: '2' }, { label: 'b', text: '3' }, { label: 'c', text: '1' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 17, category: 'vehicle',
    question: "Amatara maremare y'ikinyabiziga agomba kuzimwa mu bihe bikurikira:",
    options: [{ label: 'a', text: 'Iyo umuhanda umurikiye umuyobozi abasha kureba muri metero 20' }, { label: 'b', text: 'Iyo ikinyabiziga kigiye kubisikana n\'ibindi' }, { label: 'c', text: 'Iyo ari mu nsisiro' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'b'
  },
  {
    id: 18, category: 'vehicle',
    question: "Ikinyabiziga ntigishobora kugira amatara arenga abiri y'ubwoko bumwe keretse kubyerekeye amatara akurikira:",
    options: [{ label: 'a', text: 'Itara ndangamubyimba' }, { label: 'b', text: 'Itara ryerekana icyerekezo' }, { label: 'c', text: 'Itara ndangaburumbarare' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'd'
  },
  {
    id: 19, category: 'vehicle',
    question: "Ubugari bwa romoruki ikuruwe n'igare cyangwa velomoteri ntiburenza ibipimo bikurikira:",
    options: [{ label: 'a', text: 'cm25' }, { label: 'b', text: 'cm125' }, { label: 'c', text: 'cm45' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 20, category: 'vehicle',
    question: "Ibinyabiziga bikoreshwa nka tagisi, bitegerereza abantu mu nzira nyabagendwa, bishobora gushyirwaho itara ryerekana ko ikinyabiziga kitakodeshejwe. Iryo tara rishyirwaho ku buryo bukurikira:",
    options: [{ label: 'a', text: 'Ni itara ry\'icyatsi rishyirwa imbere ku kinyabiziga' }, { label: 'b', text: 'Ni itara ry\'icyatsi rishyirwa ibumoso' }, { label: 'c', text: 'Ni itara ry\'umuhondo rishyirwa inyuma' }, { label: 'd', text: 'A na C ni ibisubizo by\'ukuri' }],
    correctAnswer: 'a'
  },
  {
    id: 21, category: 'vehicle',
    question: "Za otobisi zagenewe gutwara abanyeshuri zishobora gushyirwaho amatara abiri asa n'icunga rihishije. Ayo matara ashyirwaho ku buryo bukurikira:",
    options: [{ label: 'a', text: 'Amatara abiri ashyirwa inyuma' }, { label: 'b', text: 'Amatara abiri ashyirwa imbere' }, { label: 'c', text: 'Rimwe rishyirwa imbere irindi inyuma' }, { label: 'd', text: 'B na C ni ibisubizo by\'ukuri' }],
    correctAnswer: 'c'
  },
  {
    id: 22, category: 'vehicle',
    question: "Itara ryo guhagarara ry'ibara ritukura rigomba kugaragara igihe ijuru rikeye nibura mu ntera ikurikira:",
    options: [{ label: 'a', text: 'Metero 100 ku manywa na metero 20 mu ijoro' }, { label: 'b', text: 'Metero 150 ku manywa na metero 50 mu ijoro' }, { label: 'c', text: 'Metero 200 ku manywa na metero 100 mu ijoro' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 23, category: 'vehicle',
    question: "Iyo umuvuduko w'ibinyabiziga bidapakiye ushobora kurenga km50 mu isaha ahategamye, bigomba kuba bifite ibikoresho by'ihoni byumvikanira mu ntera:",
    options: [{ label: 'a', text: 'Metero 100' }, { label: 'b', text: 'Metero 200' }, { label: 'c', text: 'Metero 50' }, { label: 'd', text: 'Metero 150' }],
    correctAnswer: 'c'
  },
  {
    id: 24, category: 'vehicle',
    question: "Birabujijwe kugenza ibinyabiziga bigendeshwa na moteri naza romoruki zikururwa nabyo, iyo ibiziga byambaye inziga zidahagwa cyangwa inziga zikururuka zifite umubyimba uri hasi ya cm 4. Ariko ibyo ntibikurikizwa ku binyabiziga bikurikira:",
    options: [{ label: 'a', text: 'Ku binyabiziga by\'ingabo bijya ahatarenga km25' }, { label: 'b', text: 'Ibinyabiziga bihinga' }, { label: 'c', text: 'Ibinyabiziga bya police' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 25, category: 'vehicle',
    question: "Igice cy'inzira nyabagendwa kigarukira ku mirongo ibiri yera icagaguye ibangikanye kandi gifite ubugari budahagije kugira ngo imodoka zitambuke neza, kiba ari:",
    options: [{ label: 'a', text: 'Ahanyurwa n\'amagare na velomoteri' }, { label: 'b', text: 'Ahanyurwa n\'ingorofani' }, { label: 'c', text: 'Ahanyurwa n\'ibinyamitende' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 26, category: 'vehicle',
    question: "Ubugari bwa romoruki ntiburenza ubugari bw'ikinyabiziga kiyikurura iyo ikuruwe n'ibinyabiziga bikurikira:",
    options: [{ label: 'a', text: 'Igare' }, { label: 'b', text: 'Velomoteri' }, { label: 'c', text: 'Ipikipiki ifite akanyabiziga kometse ku ruhande rwayo' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 27, category: 'vehicle',
    question: "Iyo hatarimo indi myanya birabujijwe gutwara ku ntebe y'imbere y'imodoka abana badafite imyaka:",
    options: [{ label: 'a', text: 'Imyaka 10' }, { label: 'b', text: 'Imyaka 12' }, { label: 'c', text: 'Imyaka 7' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 28, category: 'vehicle',
    question: "Icyapa kivuga gutambuka mbere y'ibinyabiziga biturutse imbere gifite amabara akurikira:",
    options: [{ label: 'a', text: 'Ubuso ni umweru' }, { label: 'b', text: 'Ikirango ni umutuku n\'umukara' }, { label: 'c', text: 'Ikirango ni umweru n\'umukara' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 29, category: 'vehicle',
    question: "Ni ryari itegeko rigenga gutambuka mbere kw'iburyo rikurikizwa mu masangano:",
    options: [{ label: 'a', text: 'Iyo nta cyapa cyo gutambuka mbere gihari' }, { label: 'b', text: 'Iyo ikimenyetso kimurika cyagenewe ibinyabiziga kidakora' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri' }],
    correctAnswer: 'c'
  },
  {
    id: 30, category: 'vehicle',
    question: "Ibimenyetso bimurika byerekana uburyo bwo kugendera mu muhanda kw'ibinyabiziga bishyirwa iburyo bw'umuhanda. Ariko bishobora no gushyirwa ibumoso cyangwa hejuru y'umuhanda:",
    options: [{ label: 'a', text: 'Hakurikijwe icyerekezo abagenzi bireba baganamo' }, { label: 'b', text: 'Hakurikijwe icyo ibyo bimenyetso bigamije kwerekana' }, { label: 'c', text: 'Kugirango birusheho kugaragara neza' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'c'
  },
  {
    id: 31, category: 'vehicle',
    question: "Iyo itara ry'umuhondo rimyatsa rikoreshejwe mu masangano y'amayira ahwanyije agaciro rishyirwa ahagana he:",
    options: [{ label: 'a', text: 'Kuri buri nzira' }, { label: 'b', text: 'Hagati y\'amasangano' }, { label: 'c', text: 'Iburyo bw\'amasangano' }, { label: 'd', text: 'A na B ni ibisubizo by\'ukuri' }],
    correctAnswer: 'd'
  },
  {
    id: 32, category: 'vehicle',
    question: "Inkombe z'inzira nyabagendwa cyangwa z'umuhanda zishobora kugaragazwa n'ibikoresho ngarurarumuri. Ibyo bikoresho bigomba gushyirwaho ku buryo abagenzi babibona:",
    options: [{ label: 'a', text: 'Babona gusa ibumoso bwabo iby\'ibara ritukura' }, { label: 'b', text: 'Iburyo babona iby\'ibara risa n\'icunga rihishije gusa' }, { label: 'c', text: 'Babona iby\'ibara ry\'umuhondo ibumoso' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 33, category: 'vehicle',
    question: "Ibinyabiziga bikurikira bigomba gukorerwa isuzumwa rimwe mu mezi 6:",
    options: [{ label: 'a', text: 'Ibinyabiziga bitwara abagenzi muri rusange' }, { label: 'b', text: 'Ibinyabiziga bigenewe gutwara ibintu birengeje toni 3.5' }, { label: 'c', text: 'Ibinyabiziga bigenewe kwigisha gutwara' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'd'
  },
  {
    id: 34, category: 'vehicle',
    question: "Iyo kuyobya umuhanda ari ngombwa bigaragazwa kuva aho uhera no kuburebure bwawo n'icyapa gifite ubuso bw'amabara akurikira:",
    options: [{ label: 'a', text: 'Ubururu' }, { label: 'b', text: 'Umweru' }, { label: 'c', text: 'Umutuku' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri' }],
    correctAnswer: 'a'
  },
  {
    id: 35, category: 'vehicle',
    question: "Ku mihanda ibyapa bikurikira bigomba kugaragazwa ku buryo bumwe:",
    options: [{ label: 'a', text: 'Ibyapa biyobora n\'ibitegeka' }, { label: 'b', text: 'Ibyapa biburira n\'ibitegeka' }, { label: 'c', text: 'Ibyapa bibuza n\'ibitegeka' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 36, category: 'vehicle',
    question: "Ni iyihe feri ituma imodoka igenda buhoro kandi igahagarara ku buryo bwizewe bubangutse kandi nyabwo, uko imodoka yaba yikoreye kose yaba igeze ahacuramye cyangwa ahaterera:",
    options: [{ label: 'a', text: 'Feri y\'urugendo' }, { label: 'b', text: 'Feri yo gutabara' }, { label: 'c', text: 'Feri yo guhagarara umwanya munini' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 37, category: 'vehicle',
    question: "Ibizirikisho by'iminyururu cyangwa by'insinga kimwe n'ibindi by'ingoboka bikoreshwa gusa igihe nta kundi umuntu yabigenza kandi ntibishobora gukurikizwa bijya vuba vuba km 20, bigaragazwa ku buryo bukurikira:",
    options: [{ label: 'a', text: 'Agatambaro gatukura kuri cm 50 z\'umuhanda' }, { label: 'b', text: 'Ikimenyetso cy\'itara risa n\'icunga rihishije' }, { label: 'c', text: 'Icyapa cyera cya mpande enye zingana gifite cm 20 kuri buri ruhande' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 38, category: 'vehicle',
    question: "Uretse mu mujyi, uburemere ntarengwa ku binyabiziga bifite imitambiko itatu cyangwa irenga hatarimo makuzungu ni:",
    options: [{ label: 'a', text: 'Toni 10' }, { label: 'b', text: 'Toni 12' }, { label: 'c', text: 'Toni 16' }, { label: 'd', text: 'Toni 24' }],
    correctAnswer: 'c'
  },
  {
    id: 39, category: 'vehicle',
    question: "Ubugari bw'imizigo yikorewe n'ibinyamitende itatu n'ubwiyikorewe n'ibinyamitende 4 bifite cyangwa bidafite moteri kimwe n'ubw'iyikorewe na romuruki zikuruwe n'ibyo binyabiziga ntibushobora kurenga ibipimo bikurikira:",
    options: [{ label: 'a', text: 'cm 30 ku bugari bw\'icyo kinyabiziga kidapakiye' }, { label: 'b', text: 'Ubugari ntarengwa budakuka ni metero 2 na sentimetero 50' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 40, category: 'vehicle',
    question: "Kunyura ku binyabiziga bindi, uretse icy'ibiziga bibiri, bibujijwe aha hakurikira:",
    options: [{ label: 'a', text: 'Hafi y\'iteme iyo hari umuhanda ufunganye' }, { label: 'b', text: 'Hafi y\'aho abanyamaguru banyura' }, { label: 'c', text: 'Hafi y\'ibice by\'umuhanda bimeze nabi' }, { label: 'd', text: 'Ibi bisubizo byose ni ukuri' }],
    correctAnswer: 'd'
  },
  {
    id: 41, category: 'vehicle',
    question: "Iyo nta mategeko awugabanya by'umwihariko, umuvuduko ntarengwa ku modoka zitwara abagenzi mu buryo bwa rusange ni:",
    options: [{ label: 'a', text: 'Km 60 mu isaha' }, { label: 'b', text: 'Km 40 mu isaha' }, { label: 'c', text: 'Km 25 mu isaha' }, { label: 'd', text: 'Km 20 mu isaha' }],
    correctAnswer: 'a'
  },
  {
    id: 42, category: 'vehicle',
    question: "Iyo nta mategeko awugabanya by'umwihariko, umuvuduko ntarengwa ku modoka zikoreshwa nk'amavatiri y'ifasi cyangwa amatagisi zifite uburemere bwemewe butarenga kilogarama 3500 ni:",
    options: [{ label: 'a', text: 'Km 60 mu isaha' }, { label: 'b', text: 'Km 40 mu isaha' }, { label: 'c', text: 'Km 75 mu isaha' }, { label: 'd', text: 'Km 20 mu isaha' }],
    correctAnswer: 'c'
  },
  {
    id: 43, category: 'vehicle',
    question: "Ikinyabiziga kibujijwe guhagarara akanya kanini aha hakurikira:",
    options: [{ label: 'a', text: 'Imbere y\'ahantu hinjirwa hakasohokerwa n\'abantu benshi' }, { label: 'b', text: 'Mu muhanda aho ugabanyijemo ibisate bigaragazwa n\'imirongo idacagaguye' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 44, category: 'vehicle',
    question: "Iyo bwije kugeza bukeye iyo hatakibona neza muri m 200, udutsiko twose tw'abanyamaguru nk'imperekerane cyangwa udutsiko tw'abanyeshuri bari ku murongo bayobowe n'umwarimu, iyo bagenda mu muhanda ku isonga hakaba hari abantu barenze umwe bagomba kugaragazwa kuburyo bukurikira:",
    options: [{ label: 'a', text: 'Imbere ni itara ry\'umuhondo ritwariwe ibumoso' }, { label: 'b', text: 'Inyuma ni itara ryera ritwariwe ibumoso n\'umuntu uri ku murongo w\'inyuma hafi y\'umurongo ugabanya umuhanda mo kabiri' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 45, category: 'vehicle',
    question: "Utuyira turi ku mpande z'umuhanda n'inkengero zigiye hejuru biharirwa abanyamaguru mu bihe bikurikira:",
    options: [{ label: 'a', text: 'Iyo hari amategeko yihariye yerekanwa n\'ibimenyetso' }, { label: 'b', text: 'Iyo badatatanye kandi bayobowe n\'umwarimu' }, { label: 'c', text: 'Iyo hatari amategeko yihariye yerekanwa n\'ibimenyetso' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'c'
  },
  {
    id: 46, category: 'vehicle',
    question: "Imburira zimurika zemerewe gukoreshwa kugirango bamenyeshe umuyobozi ko bagiye kumunyuraho aha hakurikira:",
    options: [{ label: 'a', text: 'Mu nsisiro gusa' }, { label: 'b', text: 'Ahegereye inyamaswa zikurura' }, { label: 'c', text: 'Hafi y\'amatungo' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 47, category: 'vehicle',
    question: "Uburemere ntarengwa bwemewe ntibushobora kurenga ½ cy'uburemere bw'ikinyabiziga gikurura nubw'umuyobozi kuri romoruki zikurikira:",
    options: [{ label: 'a', text: 'Romoruki ifite feri y\'urugendo' }, { label: 'b', text: 'Romoruki idafite feri y\'urugendo' }, { label: 'c', text: 'Romoruki itarenza kg 750' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 48, category: 'vehicle',
    question: "Ibinyabiziga bifite ubugari bufite ibipimo bikurikira bigomba kugira amatara ndangaburumbarare:",
    options: [{ label: 'a', text: 'Metero 2 na cm 10' }, { label: 'b', text: 'Metero 2 na cm 50' }, { label: 'c', text: 'Metero 3' }, { label: 'd', text: 'Metero 2' }],
    correctAnswer: 'a'
  },
  {
    id: 49, category: 'vehicle',
    question: "Nta tara na rimwe cyangwa akagarurarumuri bishobora kuba bifunze ku buryo igice cyabyo cyo hasi cyane kimurika kitaba kiri hasi y'ibipimo bikurikira kuva ku butaka igihe ikinyabiziga kidapakiye:",
    options: [{ label: 'a', text: 'Cm 30' }, { label: 'b', text: 'Cm 40' }, { label: 'c', text: 'Cm 50' }, { label: 'd', text: 'Metero 1 na cm 55' }],
    correctAnswer: 'b'
  },
  {
    id: 50, category: 'vehicle',
    question: "Iyo ikinyabiziga gifite amatara abiri cyangwa menshi y'ubwoko bumwe ayo matara agomba gushyirwaho ku buryo buteganye uhereye ku murongo ugabanya ikinyabizigamo kabiri mu burebure bwacyo. Ariko ibi ntibikurikizwa ku matara akurikira:",
    options: [{ label: 'a', text: 'Itara ndangamubyimba' }, { label: 'b', text: 'Itara ndangaburumbarare' }, { label: 'c', text: 'Itara ribonesha icyapa kiranga numero y\'ikinyabiziga inyuma' }, { label: 'd', text: 'A na B byose nibyo' }],
    correctAnswer: 'c'
  },
  {
    id: 51, category: 'vehicle',
    question: "Ahari hejuru cyane y'ubuso bumurika h'amatara ndangambere na ndanganyuma ntihashobora kuba aharenze ibipimo bikurikira hejuru y'ubutaka iyo ikinyabiziga kidapakiye:",
    options: [{ label: 'a', text: 'm1 na cm 50' }, { label: 'b', text: 'm1 na cm 75' }, { label: 'c', text: 'm 1 na cm 90' }, { label: 'd', text: 'm2 na cm 10' }],
    correctAnswer: 'c'
  },
  {
    id: 52, category: 'vehicle',
    question: "Ni ryari ikinyabiziga gishobora kugenda mu muhanda moteri itaka cyangwa vitesi idakora:",
    options: [{ label: 'a', text: 'Igihe kigenda ahamanuka' }, { label: 'b', text: 'Igihe gikuruwe n\'ikindi kinyabiziga' }, { label: 'c', text: 'Igihe gifite feri y\'urugendo' }, { label: 'd', text: 'Ibisubizo byose ni byo' }],
    correctAnswer: 'b'
  },
  {
    id: 53, category: 'vehicle',
    question: "Buri modoka cyangwa buri romoruki ikuruwe n'iyo modoka bishobora kugira itara risa n'icyatsi kibisi bituma umuyobozi yerekana ko yabonye ikimenyetso cy'uwitegura kumunyuraho. Iryo tara rigomba gushyirwa aha hakurikira:",
    options: [{ label: 'a', text: 'Hafi y\'inguni y\'ibumoso bw\'ikinyabiziga' }, { label: 'b', text: 'Inyuma hafi y\'impera y\'iburyo bw\'ikinyabiziga' }, { label: 'c', text: 'Inyuma ahegereye inguni y\'iburyo' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 54, category: 'vehicle',
    question: "Ibinyabiziga bikurikira bigomba kugira icyerekana umuvuduko kiri aho umuyobozi areba neza kandi kigahora kitabwaho kugirango kigume gukora neza:",
    options: [{ label: 'a', text: 'Ibinyabiziga bifite umuvuduko nibura wa km 60 mu isaha' }, { label: 'b', text: 'Ibinyabiziga bishobora kurenza km 40 mu isaha' }, { label: 'c', text: 'Ibinyabiziga bishobora kurenza km 30 mu isaha' }, { label: 'd', text: 'Ibinyabiziga bishobora kurenza km 25 mu isaha' }],
    correctAnswer: 'b'
  },
  {
    id: 55, category: 'vehicle',
    question: "Ubugari bw'imizigo yikorewe n'ipikipiki idafite akanyabiziga ko kuruhande kimwe n'ubwa romoruki ikuruwe na bene icyo kinyabiziga ntibushobora kurenza ibipimo bikurikira:",
    options: [{ label: 'a', text: 'm 1.25' }, { label: 'b', text: 'cm 30' }, { label: 'c', text: 'cm 75' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 56, category: 'vehicle',
    question: "Ibinyabiziga bikurikira bigomba kugira itara ry'ubururu rimyatsa riboneka mu mpande zose:",
    options: [{ label: 'a', text: 'Ibinyabiziga bifite ubugari burenga m 2 na cm 10' }, { label: 'b', text: 'Ibinyabiziga bya police y\'igihugu' }, { label: 'c', text: 'Ibinyabiziga ndakumirwa' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'c'
  },
  {
    id: 57, category: 'vehicle',
    question: "Ibinyabiziga bihinga n'ibindi bikoresho byihariye bikoreshwa n'ibigo bipatana imirimo, iyo bigenda mu nzira nyabagendwa igihe cya nijoro cyangwa bitagishoboka kubona neza muri m 200 bishobora kugaragazwa inyuma n'amatara 2 atukura bibikurikira:",
    options: [{ label: 'a', text: 'Kutarenza umuvuduko wa km20 mu isaha' }, { label: 'b', text: 'Uburebure bwabyo habariwemo ibyo bitwaye bukaba butarengeje m6' }, { label: 'c', text: 'Uburebure ntarengwa ntiburenga m8' }, { label: 'd', text: 'A na B nibyo bisubizo by\'ukuri' }],
    correctAnswer: 'd'
  },
  {
    id: 58, category: 'vehicle',
    question: "Iyo romoruki iziritse ku kinyamitende, velomoteri n'amapikipiki bidafite akanyabiziga ko kuruhande, iyo uburumbarare bwayo cyangwa bw'ibyo yikoreye bituma itara ry'ikinyabiziga gikurura ritagaragara igihe bitagishoboka kubona neza muri m 200 bigomba kugaragazwa ku buryo bukurikira:",
    options: [{ label: 'a', text: 'Itara ryera cyangwa ry\'umuhondo cyangwa risa n\'icunga rihishije riri kuri rumoruki inyuma' }, { label: 'b', text: 'Itara ry\'icyatsi cyangwa ry\'umuhondo cyangwa risa n\'icunga rihishije riri kuri rumoruki inyuma' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 59, category: 'vehicle',
    question: "Ku kinyabiziga cyangwa ibinyabiziga bikururana igice kirenga ku biziga ntikigomba kurenga ibipimo bikurikira:",
    options: [{ label: 'a', text: 'Inyuma ni m 3 na cm 50' }, { label: 'b', text: 'Imbere ni m 1 na cm 70' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 60, category: 'vehicle',
    question: "Iyo amatara y'ikinyabiziga agomba gucanwa kandi igihe imizigo isumba impera y'ikinyabiziga ho metero irenga igice gihera cy'imizigo kigaragazwa ku buryo bukurikira:",
    options: [{ label: 'a', text: 'Itara ritukura cyangwa akagarurarumuri ku mutuku ku manywa' }, { label: 'b', text: 'Agatambaro gatukura gafite nibura cm 50 z\'uruhande mu ijoro' }, { label: 'c', text: 'Itara ry\'umuhondo cyangwa akagarurarumuri k\'umuhondo' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 61, category: 'vehicle',
    question: "Iyo imizigo igizwe n'ibinyampeke, ikawa, ipamba idatonoye, ibishara, ibyatsi, ibishami cyangwa ubwatsi bw'amatungo bidahambiriye uretse amapaki afunze, ubugari bwayo bushobora kugera ku bipimo bikurikira:",
    options: [{ label: 'a', text: 'm 2.50' }, { label: 'b', text: 'm 2.75' }, { label: 'c', text: 'm 3' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 62, category: 'vehicle',
    question: "Uretse mu mijyi, uburemere ntarengwa bwemewe ku binyabiziga bifatanye bifite imitambiko itatu ni:",
    options: [{ label: 'a', text: 'Toni 20' }, { label: 'b', text: 'Toni 16' }, { label: 'c', text: 'Toni 12' }, { label: 'd', text: 'Toni 10' }],
    correctAnswer: 'c'
  },
  {
    id: 63, category: 'vehicle',
    question: "Buri modoka cyangwa buri romoruki ikuruwe n'iyo modoka bishobora kugira itara rituma umuyobozi yerekana ko yabonye ikimenyetso cy'uwitegura kumunyuraho. Iryo tara rifite amabara akurikira:",
    options: [{ label: 'a', text: 'Umuhondo' }, { label: 'b', text: 'Icyatsi kibisi' }, { label: 'c', text: 'Umweru' }, { label: 'd', text: 'Umutuku' }],
    correctAnswer: 'b'
  },
  {
    id: 64, category: 'vehicle',
    question: "Ikinyabiziga cyangwa ibinyabiziga bikururana bifite imitambiko ibiri ikurikiranye mu bugari bwayo, uburebure bwabyo ntibugomba kurenza ibipimo bikurikira:",
    options: [{ label: 'a', text: 'm11' }, { label: 'b', text: 'm10' }, { label: 'c', text: 'm7' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 65, category: 'vehicle',
    question: "Bumwe muri ubu bwoko bwa feri ituma imodoka iguma aho iri uko yaba yikoreye kose ku muzamuko cyangwa ku gacuri bya 16%, imyanya ya feri igomba gufata igakomeza kwegera kuburyo bw'ibyuma niyo umuyobozi yaba atarimo:",
    options: [{ label: 'a', text: 'Feri yo guhagarara umwanya munini' }, { label: 'b', text: 'Feri y\'urugendo' }, { label: 'c', text: 'Feri yo gutabara' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 66, category: 'vehicle',
    question: "Utugarurarumuri turi mu mbavu z'ikinyabiziga tugomba kugira ibara rikurikira:",
    options: [{ label: 'a', text: 'Umweru' }, { label: 'b', text: 'Umuhondo' }, { label: 'c', text: 'Umutuku' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 67, category: 'vehicle',
    question: "Romoruki zifite ubugari ntarengwa bwa cm 80 zishobora gushyirwaho akagarurarumuri kamwe gusa iyo zikuruwe n'ibinyabiziga bikurikira:",
    options: [{ label: 'a', text: 'Velomoteri' }, { label: 'b', text: 'Ipikipiki idafite akanyabiziga ku ruhande' }, { label: 'c', text: 'Amavatiri y\'ifasi' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 68, category: 'vehicle',
    question: "Amatara maremare y'ibara ryera cyangwa ry'umuhondo agomba nijoro igihe ijuru rikeye kumurika mu muhanda mu ntera ya m 100 nibura imbere y'ikinyabiziga, ariko ku binyabiziga bifite moteri itarengeje za sentimetero kibe 125 iyo ntera igira ibipimo bikurikira:",
    options: [{ label: 'a', text: 'm200' }, { label: 'b', text: 'm100' }, { label: 'c', text: 'm85' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 69, category: 'vehicle',
    question: "Iyo banyuze iruhande rw'inkomyi abanyamaguru bagomba gukikira banyuze mu muhanda, abayobozi bagomba gusiga umwanya ufite ubugari bwa m 1 nibura hagati yabo nayo. Iyo ibyo bidashobora kubahirizwa, umuyobozi agomba kuyikikira afite umuvuduko utarengeje ibipimo bikurikira:",
    options: [{ label: 'a', text: 'km 10 mu isaha' }, { label: 'b', text: 'km 20 mu isaha' }, { label: 'c', text: 'km 30 mu isaha' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 70, category: 'vehicle',
    question: "Guhagarara akanya gato no guhagarara akanya kanini bibujijwe cyane cyane aha hakurikira:",
    options: [{ label: 'a', text: 'Ku mihanda y\'icyerekezo kimwe hose' }, { label: 'b', text: 'Mu ruhande ruteganye n\'urwo ikindi kinyabiziga gihagazemo akanya gato cyangwa kanini' }, { label: 'c', text: 'Ku mihanda ibisikanirwamo, iyo ubugari bw\'umwanya w\'ibinyabiziga ugomba gutuma bibisikana butagifite m12' }, { label: 'd', text: 'Ibisubizo byose nibyo' }],
    correctAnswer: 'b'
  },
  {
    id: 71, category: 'vehicle',
    question: "Amatara ndangambere n'aya ndanganyuma y'imodoka zitarengeje m 6 z'uburebure na m 2 z'ubugari iyo ibyo binyabiziga bihagaze umwanya muto cyangwa munini mu nsisiro bibangikanye ku ruhande rw'umuhanda, ashobora gusimburwa n'amatara akurikira:",
    options: [{ label: 'a', text: 'Amatara magufi' }, { label: 'b', text: 'Amatara ndangaburumbarare' }, { label: 'c', text: 'Amatara yo guhagarara umwanya munini' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 72, category: 'vehicle',
    question: "Iyo kuva bwije kugeza bukeye cyangwa ibitagishoboka kubona neza muri m 200, imirongo y'ingabo z'igihugu zigendera kuri gahunda n'utundi dutsiko twose tw'abanyamaguru nk'imperekerane cyangwa udutsiko tw'abanyeshuri bayobowe na mwarimu, iyo bagenda mu muhanda ku isonga hakaba hari abantu barenze umwe, bagaragazwa ku buryo bukurikira:",
    options: [{ label: 'a', text: 'Imbere ni itara ryera ritwariwe ku ruhande rw\'ibumoso n\'umuntu uri ku murongo w\'imbere hafi y\'umurongo ugabanya umuhanda mo kabiri' }, { label: 'b', text: 'Inyuma ni itara umuhondo ritwariwe ku ruhande rw\'ibumoso n\'umuntu uri ku murongo w\'inyuma hafi y\'umurongo ugabanya umuhanda mo kabiri' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 73, category: 'vehicle',
    question: "Imizigo yikorewe n'amagare, velomoteri, amapikipiki, ibinyamitende by'ibiziga bitatu nibyo ibiziga bine bifite cyangwa bidafite moteri inyuma ntishobora kurenza ibipimo bikurikira:",
    options: [{ label: 'a', text: 'cm 20' }, { label: 'b', text: 'cm 30' }, { label: 'c', text: 'cm 50' }, { label: 'd', text: 'cm 60' }],
    correctAnswer: 'c'
  },
  {
    id: 74, category: 'vehicle',
    question: "Itara ndanganyuma rigomba gushyirwa aha hakurikira:",
    options: [{ label: 'a', text: 'Ahagereye inguni y\'ibumoso y\'ikinyabiziga' }, { label: 'b', text: 'Ahagereye inguni y\'iburyo bw\'ikinyabiziga' }, { label: 'c', text: 'Inyuma kandi y\'impera y\'ibumoso bw\'ikinyabiziga' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 75, category: 'vehicle',
    question: "Nta tara na rimwe cyangwa utugarurarumuri bishobora kuba bifunze kuburyo igice cyabyo cyo hasi cyane kimurika kitaba kiri hasi ya cm 40 kuva ku butaka igihe ikinyabiziga kidapakiye ariko ibyo ntibikurikizwa ku matara akurikira:",
    options: [{ label: 'a', text: 'Amatara kamenabihu' }, { label: 'b', text: 'Amatara yo gusubira inyuma' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 76, category: 'vehicle',
    question: "Iyo tumuritswe n'amatara y'urugendo y'ikinyabiziga utugarurarumuri tugomba n'ijoro, igihe ijuru rikeye kubonwa n'umuyobozi w'ikinyabiziga kiri mu ntera ikurikira:",
    options: [{ label: 'a', text: 'Metero 100' }, { label: 'b', text: 'Metero 150' }, { label: 'c', text: 'Metero 200' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 77, category: 'vehicle',
    question: "Ibinyabiziga bigendeshwa na moteri, hatarimo velomoteri n'ibinyabiziga bidapakiye umuvuduko wabyo udashobora kurenga km 50 mu isaha ahateganye bigomba kuba bifite ibikoresho by'ihoni byumvikanira mu ntera ikurikira:",
    options: [{ label: 'a', text: 'Metero 200' }, { label: 'b', text: 'Metero 150' }, { label: 'c', text: 'Metero 100' }, { label: 'd', text: 'Metero 50' }],
    correctAnswer: 'c'
  },
  {
    id: 78, category: 'vehicle',
    question: "Ahatari mu nsisiro ibyapa biburira n'ibyapa byo gutambuka mbere bigomba gushyirwa mu ntera ikurikira y'ahantu habyerekana:",
    options: [{ label: 'a', text: 'Metero 150 kugeza kuri 200' }, { label: 'b', text: 'Metero 100 kugeza kuri 150' }, { label: 'c', text: 'Metero 50 kugeza kuri 100' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 79, category: 'vehicle',
    question: "Inkombe z'inzira nyabagendwa cyangwa z'umuhanda zishobora kugaragazwa n'ibikoresho ngarurarumuri. Ibyo bikoresho bigomba gushyirwaho ku buryo abagenzi babibona ku buryo bukurikira:",
    options: [{ label: 'a', text: 'Babona iburyo bwabo iby\'ibara ritukura cyangwa ibisa n\'icunga rihishije' }, { label: 'b', text: 'Ibumoso babona iby\'ibara ryera' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 80, category: 'vehicle',
    question: "Ahatari mu nsisiro, umuyobozi wese ugenza ikinyabiziga kimwe cyangwa ibinyabiziga bikomatanye bifite uburemere ntarengwa bwemewe burenga ibiro 3500 cyangwa bifite uburebure bwite burenga metero 10 agomba gusiga hagati y'ikinyabiziga cye n'iki muri imbere umwanya uhagije keretse mu bihe bikurikira:",
    options: [{ label: 'a', text: 'Mu gihe ibigendera mu muhanda ari byinshi kimwe no mu duce tw\'inzira nyabagendwa aho kunyuranaho bibujijwe' }, { label: 'b', text: 'Igihe ibigendera mu muhanda ari byinshi' }, { label: 'c', text: 'Mu duce tw\'inzira nyabagendwa aho kunyuranaho bibujijwe' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 81, category: 'vehicle',
    question: "Amatara ndangacyerekezo agomba kuba agizwe n'ibintu bifashe ku rumuri rumyasa, biringaniye ku buryo bigira umubare utari igiharwe ku mpande z'imbere n'inyuma z'ikinyabiziga, ayo matara aba afite amabara akurikira:",
    options: [{ label: 'a', text: 'Amatara y\'imbere aba yera cyangwa ari umuhondo' }, { label: 'b', text: 'Ayinyuma aba atukura cyangwa asa n\'icunga rihishije' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Ayinyuma aba asa n\'icunga rihishije' }],
    correctAnswer: 'c'
  },
  {
    id: 82, category: 'vehicle',
    question: "Amahoni y'ibinyabiziga bigendeshwa na moteri agomba kohereza ijwi ry'injyana imwe rikomeza kandi ridacengera amatwi ariko ibinyabiziga bikurikira bishobora kugira ihoni ridasanzwe ridahuye n'ibivuzwe haruguru:",
    options: [{ label: 'a', text: 'Ibinyabiziga ndakumirwa' }, { label: 'b', text: 'Ibinyabiziga bikora ku mihanda' }, { label: 'c', text: 'Ibinyabiziga bifite ubugari burenze m 2.10' }, { label: 'd', text: 'A na B ni ibisubizo by\'ukuri' }],
    correctAnswer: 'd'
  },
  {
    id: 83, category: 'vehicle',
    question: "Icyapa kibuza kunyura kubindi binyabiziga byose uretse ibinyamitende ibiri n'amapikipiki adafite akanyabiziga ku ruhande gifite ibimenyetso by'amabara akurikira:",
    options: [{ label: 'a', text: 'Umweru n\'umukara' }, { label: 'b', text: 'Umutuku n\'umukara' }, { label: 'c', text: 'Ubururu' }, { label: 'd', text: 'A na B ni ibisubizo by\'ukuri' }],
    correctAnswer: 'b'
  },
  {
    id: 84, category: 'vehicle',
    question: "Icyapa kivuga ko hatanyurwa mu byerekezo byombi kirangwa n'ubuso bw'ibara rikurikira:",
    options: [{ label: 'a', text: 'Umukara' }, { label: 'b', text: 'Umweru' }, { label: 'c', text: 'Ubururu' }, { label: 'd', text: 'Umutuku' }],
    correctAnswer: 'b'
  },
  {
    id: 85, category: 'vehicle',
    question: "Ibinyabiziga bikurikira bigomba kugira ibikoresho by'ihoni byumvikanira mu ntera ya m 20:",
    options: [{ label: 'a', text: 'Amapikipiki' }, { label: 'b', text: 'Velomoteri' }, { label: 'c', text: 'Ibinyabiziga bigendeshwa na moteri bidapakiye' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 86, category: 'vehicle',
    question: "Imirongo y'ingabo z'igihugu zigendera kuri gahunda n'utundi dutsiko twose tw'abanyamaguru nk'imperekerane cyangwa udutsiko tw'abanyeshuri iyo bitagishoboka kubona neza muri m200, bagaragazwa ni itara ryera imbere naho inyuma ni itara ry'umutuku ariko iyo uburebure bwiyo mirongo cyangwa bw'utwo dutsiko burenga m6 impande zatwo cyangwa zayo zigaragazwa ku buryo bukurikira:",
    options: [{ label: 'a', text: 'Itara rimwe cyangwa menshi yera' }, { label: 'b', text: 'Amatara menshi y\'umuhondo' }, { label: 'c', text: 'Amatara menshi asa n\'icunga rihishije' }, { label: 'd', text: 'Ibisubizo byose nibyo' }],
    correctAnswer: 'd'
  },
  {
    id: 87, category: 'vehicle',
    question: "Amatara ndangambere na ndanganyuma y'imodoka zitarengeje m 6 z'uburebure na m 2 z'ubugari kandi nta kindi kinyabiziga kiziritseho ashobora gusimburwa n'amatara yo guhagarara umwanya munini iyo ibyo binyabiziga bihagaze umwanya muto cyangwa munini mu nsisiro bibangikanye ku ruhande rw'umuhanda. Ayo matara arangwa n'amabara akurikira:",
    options: [{ label: 'a', text: 'Umweru cyangwa umuhondo imbere' }, { label: 'b', text: 'Umutuku cyangwa umuhondo inyuma' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 88, category: 'vehicle',
    question: "Amatara ndangaburumbarare agomba kubonwa nijoro igihe ijuru rikeye n'umuyobozi w'ikinyabiziga kiri mu ntera ya:",
    options: [{ label: 'a', text: 'm 50 nibura' }, { label: 'b', text: 'm 100' }, { label: 'c', text: 'm 150' }, { label: 'd', text: 'm 200 nibura' }],
    correctAnswer: 'd'
  },
  {
    id: 89, category: 'vehicle',
    question: "Uretse ku byerekeye imihanda iromboreje y'ibisate byinshi n'imihanda y'imodoka igice cy'umuhanda kiri hakurya y'umurongo mugari wera ucibwa ku muhanda ngo ugaragaze inkombe mpimbano zawo kigenewe ibi bikurikira:",
    options: [{ label: 'a', text: 'Guhagararwamo umwanya muto gusa' }, { label: 'b', text: 'Guhagararwamo umwanya munini gusa' }, { label: 'c', text: 'Guhagararwamo umwanya muto n\'umunini' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 90, category: 'vehicle',
    question: "Ibimenyetso by'agateganyo bigizwe n'imitemeri y'ibara risa n'icunga rihishije bishobora gusimbura ibi bikurikira:",
    options: [{ label: 'a', text: 'Imirongo yera irombereje idacagaguye gusa' }, { label: 'b', text: 'Imirongo yera irombereje idacagaguye n\'icagaguye' }, { label: 'c', text: 'Imirongo icagaguye n\'idacagaguye ibangikanye' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 91, category: 'vehicle',
    question: "Iyo bitagishoboka kubona muri m 200 imodoka zikuruwe n'inyamaswa, ingorofani, inyamaswa zitwaye imizigo cyangwa zigenderwamo kimwe n'amatungo bigomba kurangwa na:",
    options: [{ label: 'a', text: 'Imbere ni itara ryera' }, { label: 'b', text: 'Imbere ni itara ry\'umuhondo cyangwa risa n\'icunga rihishije' }, { label: 'c', text: 'Inyuma ni itara rimwe ritukura' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'd'
  },
  {
    id: 92, category: 'vehicle',
    question: "Ikinyabiziga cyose cyangwa inyamaswa ihagaze umwanya muto cyangwa munini, iyo gihagaze mu mwanya wo kuruhande wagenewe abanyamaguru, kugirango bashobore kugenda batagombye kunyura mu muhanda, umuyobozi agombye kubasigira akayira gafite byibura ibipimo bikurikira by'ubugari:",
    options: [{ label: 'a', text: 'm 1' }, { label: 'b', text: 'm 2' }, { label: 'c', text: 'm 0.5' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 93, category: 'vehicle',
    question: "Icyapa cyerekana ahantu hagenewe guhagararwamo n'imodoka nini zagenewe gutwara abantu cyirangwa n'ubuso bw'amabara akurikira:",
    options: [{ label: 'a', text: 'Ubururu' }, { label: 'b', text: 'Umweru' }, { label: 'c', text: 'Umutuku' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 94, category: 'vehicle',
    question: "Icyapa cyerekana ko inzira giteyeho mu ntangiriro idakomeza kigaragazwa n'ikirango (ikimenyetso) cy'amabara akurikira:",
    options: [{ label: 'a', text: 'Umukara n\'umutuku' }, { label: 'b', text: 'Umukara n\'umweru' }, { label: 'c', text: 'Umweru n\'umutuku' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 95, category: 'vehicle',
    question: "Buri modoka yagenewe gutwara abantu, ariko umubare wabo ntarengwa ukaba munsi ya 6 umuyobozi abariwemo igomba kugira imikandara yo kurinda ibyago igenewe aba bakurikira:",
    options: [{ label: 'a', text: 'Umuyobozi' }, { label: 'b', text: 'Umugenzi wicaye ku ntebe y\'imbere' }, { label: 'c', text: 'Ishobora no kugira imikandara kuzindi ntebe z\'inyuma' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'd'
  },
  {
    id: 96, category: 'vehicle',
    question: "Usibye ibinyabiziga by'ingabo z'Igihugu, Ikinyabiziga kigendeshwa na moteri kiriho ibyuma ntamenwa cyangwa ikindi cyose gituma gikoreshwa mu gutera cyangwa mu kwitabara ntigishobora kugenda mu nzira nyabagendwa kidafite uruhushya rwihariye. Urwo ruhushya rutangwa naba bakurikira:",
    options: [{ label: 'a', text: 'Police y\'igihugu' }, { label: 'b', text: 'Minisitiri ushinzwe gutwara abantu n\'ibintu' }, { label: 'c', text: 'Minisitiri w\'ingabo' }, { label: 'd', text: 'Ikigo cy\'igihugu gishinzwe imisoro n\'amahoro' }],
    correctAnswer: 'b'
  },
  {
    id: 97, category: 'vehicle',
    question: "Iyo umukumbi ugizwe n'amatungo maremare arenze ane cyangwa amatungo magufi arenze atandatu mu nzira nyabagendwa iyo hatakibona neza kuburyo umuyobozi abona muri m 200 ugomba kugaragazwa kuburyo bukurikira:",
    options: [{ label: 'a', text: 'Itara ry\'urumuri rwera cyangwa rusa n\'icunga rihishije imbere y\'umukumbi' }, { label: 'b', text: 'Itara ry\'urumuri rutukura cyangwa umuhondo ritwawe inyuma y\'umukumbi' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 98, category: 'vehicle',
    question: "Ibinyabiziga biherekeranyije mu butumwa ntibishobora gutonda uburebure burenga umurongo wa m 500. Iyi bibaye bityo ibinyabiziga biherekeranye mu butumwa bishobora kugabanwamo amatsinda atonze umurongo atarengeje m 50 z'uburebure kdi hagati yayo hakaba byibura m 50 ariko ibyo ntibikurikizwa kubinyabiziga bikurikira:",
    options: [{ label: 'a', text: 'Ibinyabiziga bya police biherekeranyije' }, { label: 'b', text: 'Ibinyabiziga by\'abasirikare biherekeranyije mu nsisiro' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 99, category: 'vehicle',
    question: "Iyo ikinyabiziga gikururwa n'inyamaswa nacyo gikuruye ikindi uburebure bw'ibikururwa bukaba burenga m 18 hatabariwemo icyo kinyabiziga cya mbere kiziritseho hagomba ibi bikurikira:",
    options: [{ label: 'a', text: 'Umuherekeza w\'ikinyabiziga cya kabiri' }, { label: 'b', text: 'Abaherekeza babiri' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 100, category: 'vehicle',
    question: "Ibinyabiziga bikurikira ntibitegetswe kugira ibimenyetso bibyerekana iyo byambukiranya umuhanda cyangwa bigenda ku ruhande rwawo:",
    options: [{ label: 'a', text: 'Ibinyabiziga bigendwamo n\'abana' }, { label: 'b', text: 'Ibinyabiziga bigendwamo n\'abamugaye' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },

  // ===== ROAD SIGNS SECTION (Q140-Q170) =====
  {
    id: 140, category: 'signs',
    question: "Iki cyapa gifite umuzenguruko w'umutuku na mpandeshatu gisobanura iki?",
    options: [{ label: 'a', text: 'Ibyapa bitegeka' }, { label: 'b', text: 'Ibyapa bibuza' }, { label: 'c', text: 'Ibyapa biburira' }, { label: 'd', text: 'Ibyapa by\'amakuru' }],
    correctAnswer: 'c',
  },
  {
    id: 141, category: 'signs',
    question: "Iki cyapa gifite uruziga n'umuzenguruko w'umutuku gisobanura iki?",
    options: [{ label: 'a', text: 'Ibyapa biburira' }, { label: 'b', text: 'Ibyapa bitegeka' }, { label: 'c', text: 'Ibyapa bibuza' }, { label: 'd', text: 'Ibyapa by\'amakuru' }],
    correctAnswer: 'c',
  },
  {
    id: 142, category: 'signs',
    question: "Icyapa cy'umuhanda gifite uruziga mubuso bw'ubururu n'ikirango cy'umweru gisobanura iki?",
    options: [{ label: 'a', text: 'Icyago' }, { label: 'b', text: 'Ibibuzwa' }, { label: 'c', text: 'Ibitegetswe' }, { label: 'd', text: 'Amakuru' }],
    correctAnswer: 'c',
  },
  {
    id: 143, category: 'signs',
    question: "Icyapa gifite mpandeshatu mubuso bw'umweru n'umuzenguruko w'umutuku gisobanura ubwoko bwacyo bwite:",
    options: [{ label: 'a', text: 'Icyapa cy\'amakuru' }, { label: 'b', text: 'Icyapa cy\'ibibuzwa' }, { label: 'c', text: 'Icyapa cy\'ibyago' }, { label: 'd', text: 'Icyapa cy\'ibitegetswe' }],
    correctAnswer: 'c',
  },
  {
    id: 144, category: 'signs',
    question: "Iki cyapa gisobanura iki? (Icyapa cy'umuhanda gifite umushyo w'ikinyabiziga)",
    options: [{ label: 'a', text: 'Ntihanyurwa n\'ibinyabiziga bipakiye' }, { label: 'b', text: 'Ntihanyurwa n\'amapikipiki' }, { label: 'c', text: 'Ntihanyurwa n\'ibinyabiziga bifite moteri' }, { label: 'd', text: 'Ntagisubizo cy\'ukuri' }],
    correctAnswer: 'c',
  },
  {
    id: 145, category: 'signs',
    question: "Iki cyapa cy'icyago gisobanura iki? (Mpandeshatu ifite imbeba z'ingona)",
    options: [{ label: 'a', text: 'Ahegereye aho imisozi ihinduka' }, { label: 'b', text: 'Ahegereye aho umuhanda upfuka' }, { label: 'c', text: 'Ahantu umuhanda uzenguruka' }, { label: 'd', text: 'Ahantu hasa no kugwa' }],
    correctAnswer: 'b',
  },
  {
    id: 146, category: 'signs',
    question: "Icyapa kifite umushyo w'inka mubuso bw'umweru gisobanura iki?",
    options: [{ label: 'a', text: 'Inzira y\'amatungo' }, { label: 'b', text: 'Amasoko y\'amatungo' }, { label: 'c', text: 'Ahegereye amatungo mu muhanda' }, { label: 'd', text: 'Ivuriro ry\'amatungo' }],
    correctAnswer: 'c',
  },
  {
    id: 147, category: 'signs',
    question: "Icyapa gifite umushyo w'umuntu uri gutunga igare mubuso bw'ubururu gisobanura iki?",
    options: [{ label: 'a', text: 'Abanyamagare ntibemerewe' }, { label: 'b', text: 'Inzira y\'amagare itegetswe' }, { label: 'c', text: 'Umuhanda wagenewe amagare gusa' }, { label: 'd', text: 'Ahegereye ikibuga cy\'amagare' }],
    correctAnswer: 'b',
  },
  {
    id: 148, category: 'signs',
    question: "Icyapa cy'umuhanda gifite uruziga n'umuzenguruko w'umuhondo gisobanura iki?",
    options: [{ label: 'a', text: 'Imihanda izenguruka irinduka' }, { label: 'b', text: 'Mwanya wo guhagarara wagenewe' }, { label: 'c', text: 'Serivisi z\'iminyururu z\'indege' }, { label: 'd', text: 'Ntagisubizo' }],
    correctAnswer: 'a',
  },
  {
    id: 149, category: 'signs',
    question: "Iki cyapa cy'ibyago gifite umushyo w'indege gisobanura iki?",
    options: [{ label: 'a', text: 'Ahegereye ikibuga cy\'indege' }, { label: 'b', text: 'Ahegereye aho indege zigwa' }, { label: 'c', text: 'Ubutumwa butwara abantu' }, { label: 'd', text: 'Serivisi z\'indege hafi' }],
    correctAnswer: 'a',
  },
  {
    id: 150, category: 'signs',
    question: "Iki cyapa gifite umushyo w'umuyaga w'intambike gisobanura iki?",
    options: [{ label: 'a', text: 'Hano hari umuyaga w\'intambike' }, { label: 'b', text: 'Hano hari imvura nyinshi' }, { label: 'c', text: 'Hano hari inkubi z\'imvura' }, { label: 'd', text: 'Hano hari ibihu bikabije' }],
    correctAnswer: 'a',
  },
  {
    id: 151, category: 'signs',
    question: "Iki cyapa gifite umushyo w'inkoni n'urwuri gisobanura iki?",
    options: [{ label: 'a', text: 'Umuhanda ukomeje kuvunjwa' }, { label: 'b', text: 'Ahegereye imirimo yo kubaka umuhanda' }, { label: 'c', text: 'Umuhanda w\'ubukorikori' }, { label: 'd', text: 'Ahegereye aho harema ubwatsi' }],
    correctAnswer: 'b',
  },
  {
    id: 152, category: 'signs',
    question: "Icyapa gifite umushyo w'umuyobozi w'ikinyabiziga mubuso bw'ubururu gisobanura iki?",
    options: [{ label: 'a', text: 'Kumara umukandara itegetswe' }, { label: 'b', text: 'Ahantu hatangwa amabwiriza' }, { label: 'c', text: 'Gutunga agatabo k\'uruhushya itegetswe' }, { label: 'd', text: 'Gufunga umukandara itegetswe' }],
    correctAnswer: 'd',
  },
  {
    id: 153, category: 'signs',
    question: "Iki cyapa gifite ikirango cy'indege n'umuhanda gisabanura iki?",
    options: [{ label: 'a', text: 'Indege ziruka hano' }, { label: 'b', text: 'Ahegereye inzira ya indege ihanamye n\'umuhanda' }, { label: 'c', text: 'Serivisi z\'indege ziri hafi' }, { label: 'd', text: 'Ahantu hari amatara maremare' }],
    correctAnswer: 'b',
  },
  {
    id: 154, category: 'signs',
    question: "Icyapa gifite ikirango cy'umuntu uri guhagarara gifite ubuso bw'ubururu gisobanura iki?",
    options: [{ label: 'a', text: 'Guhagarara itegetswe' }, { label: 'b', text: 'Buri muyobozi agomba guhagarara' }, { label: 'c', text: 'Aho bahagarara abagenzi' }, { label: 'd', text: 'Umwanya wo guhagarara wagenewe' }],
    correctAnswer: 'a',
  },
  {
    id: 155, category: 'signs',
    question: "Iki cyapa gifite umushyo w'ikinyabiziga cy'ingabo gisobanura iki?",
    options: [{ label: 'a', text: 'Ntihanyurwa n\'abagenzi basanzwe' }, { label: 'b', text: 'Ahegereye kaserne y\'ingabo' }, { label: 'c', text: 'Umuhanda w\'ingabo' }, { label: 'd', text: 'Ahegereye aho ingabo ziba' }],
    correctAnswer: 'b',
  },
  {
    id: 156, category: 'signs',
    question: "Iki cyapa gifite umushyo w'amazi atemba ku muhanda gisobanura iki?",
    options: [{ label: 'a', text: 'Ahegereye umwuzure' }, { label: 'b', text: 'Umuhanda unyerera bitewe n\'amazi' }, { label: 'c', text: 'Ahegereye aho umuhanda uba urimo amazi' }, { label: 'd', text: 'Imvura nyinshi iri guca' }],
    correctAnswer: 'c',
  },
  {
    id: 157, category: 'signs',
    question: "Iki cyapa cy'ibyago gifite imishiko y'ibiti gisobanura iki?",
    options: [{ label: 'a', text: 'Ahegereye ishyamba' }, { label: 'b', text: 'Ahegereye aho ibiti bishobora kugwa ku muhanda' }, { label: 'c', text: 'Ahantu hera ibitoke' }, { label: 'd', text: 'Inzira za buri gihe zifunzwe' }],
    correctAnswer: 'b',
  },
  {
    id: 158, category: 'signs',
    question: "Iki cyapa gifite umushyo w'amahoro n'impanda gisobanura iki?",
    options: [{ label: 'a', text: 'Ahegereye gasitasiyo ya police' }, { label: 'b', text: 'Ahegereye ikibuga cy\'imikino' }, { label: 'c', text: 'Habuza kuvuza impanda' }, { label: 'd', text: 'Habuza gutoranya imodoka' }],
    correctAnswer: 'a',
  },
  {
    id: 159, category: 'signs',
    question: "Iki cyapa gifite umushyo w'ikinyabiziga giturutse ibumoso n'iburyo gisobanura iki?",
    options: [{ label: 'a', text: 'Tanga inzira ku binyabiziga bituruka ibumoso' }, { label: 'b', text: 'Ahegereye amasangano y\'imihanda' }, { label: 'c', text: 'Umuhanda ufite ibyerekezo bibiri' }, { label: 'd', text: 'Birabujijwe guhinduka' }],
    correctAnswer: 'b',
  },
  {
    id: 160, category: 'signs',
    question: "Iki cyapa cy'uruziga gifite umushyo w'ikinyabiziga n'imbeba z'ingona gisobanura iki?",
    options: [{ label: 'a', text: 'Ntihanyurwa n\'ibinyabiziga binini' }, { label: 'b', text: 'Uburebure bw\'ikinyabiziga ntibugomba kurenza' }, { label: 'c', text: 'Ubugari bw\'ikinyabiziga ntibugomba kurenza' }, { label: 'd', text: 'Uburemere bw\'ikinyabiziga ntibugomba kurenza' }],
    correctAnswer: 'd',
  },
  {
    id: 161, category: 'signs',
    question: "Iki cyapa gifite umushyo w'ikinyabiziga gifite iterambere risobanutse gisobanura iki?",
    options: [{ label: 'a', text: 'Ntihanyurwa n\'ibinyabiziga bidafite freri' }, { label: 'b', text: 'Ntihanyurwa n\'ibinyabiziga bitwara ibintu' }, { label: 'c', text: 'Ntihanyurwa n\'ibinyabiziga bitwara ibintu byangiza ibidukikije' }, { label: 'd', text: 'Ntihanyurwa n\'amapikipiki' }],
    correctAnswer: 'c',
  },
  {
    id: 162, category: 'signs',
    question: "Iki cyapa gifite akamaro k'umweru gisobanura iki?",
    options: [{ label: 'a', text: 'Guhagarara itegetswe' }, { label: 'b', text: 'Kugendera buhoro buhoro' }, { label: 'c', text: 'Tanga inzira' }, { label: 'd', text: 'Hagarara kandi tanga inzira' }],
    correctAnswer: 'd',
  },
  {
    id: 163, category: 'signs',
    question: "Iki cyapa cy'umuhanda gifite umushyo w'icumbi (hoteli) gisobanura iki?",
    options: [{ label: 'a', text: 'Ahegereye gasitasiyo yo gutwara' }, { label: 'b', text: 'Ahegereye icumbi' }, { label: 'c', text: 'Ahegereye aho birara' }, { label: 'd', text: 'Serivisi z\'uturiro' }],
    correctAnswer: 'b',
  },
  {
    id: 164, category: 'signs',
    question: "Iki cyapa gifite umushyo w'abantu bari ku murongo gisobanura iki?",
    options: [{ label: 'a', text: 'Ahegereye umujyi' }, { label: 'b', text: 'Ahegereye abaturage benshi' }, { label: 'c', text: 'Ahegereye aho abantu benshi bakoresha umuhanda' }, { label: 'd', text: 'Ahegereye amasoko' }],
    correctAnswer: 'c',
  },
  {
    id: 165, category: 'signs',
    question: "Iki cyapa gifite umushyo w'ibiziga bibiri gisobanura iki?",
    options: [{ label: 'a', text: 'Ahegereye gasitasiyo yo gucunga ibiziga' }, { label: 'b', text: 'Ahegereye aho bamanurira ibiziga' }, { label: 'c', text: 'Nzira yagenewe ibinyabiziga bifite ibiziga bibiri' }, { label: 'd', text: 'Aho bivugo ibiziga bigishyirwaho' }],
    correctAnswer: 'a',
  },
  {
    id: 166, category: 'signs',
    question: "Iki cyapa gifite akamaro k'akayira gisobanura iki?",
    options: [{ label: 'a', text: 'Inzira y\'abanyamaguru itegetswe' }, { label: 'b', text: 'Inzira y\'amagare itegetswe' }, { label: 'c', text: 'Inzira y\'ibinyabiziga itegetswe' }, { label: 'd', text: 'Inzira y\'amapikipiki itegetswe' }],
    correctAnswer: 'a',
  },
  {
    id: 167, category: 'signs',
    question: "Iki cyapa cy'umuhanda gifite uruziga rw'ibara rya peteroli gisobanura iki?",
    options: [{ label: 'a', text: 'Gasitasiyo ya peteroli hafi' }, { label: 'b', text: 'Birabujijwe kujya na peteroli' }, { label: 'c', text: 'Ahegereye aho hatuzurira peteroli' }, { label: 'd', text: 'Ahantu hazimya inkongi' }],
    correctAnswer: 'a',
  },
  {
    id: 168, category: 'signs',
    question: "Iki cyapa gifite umushyo w'ibaruwa y'ikoranabuhanga gisobanura iki?",
    options: [{ label: 'a', text: 'Ahegereye aho hari inyandiko' }, { label: 'b', text: 'Ahegereye poste' }, { label: 'c', text: 'Ahegereye serivisi z\'itumanaho' }, { label: 'd', text: 'Ahegereye aho batumanaho' }],
    correctAnswer: 'c',
  },
  {
    id: 169, category: 'signs',
    question: "Iki cyapa gifite umushyo w'icyi kigega cy'amazi gisobanura iki?",
    options: [{ label: 'a', text: 'Ahegereye aho bagabanya amazi' }, { label: 'b', text: 'Ahegereye isumo ry\'amazi' }, { label: 'c', text: 'Serivisi z\'amazi yo kunywa hafi' }, { label: 'd', text: 'Ahegereye aho amazi aturuka' }],
    correctAnswer: 'c',
  },
  {
    id: 170, category: 'signs',
    question: "Iki cyapa gifite umushyo w'uturere twa mbere gisobanura iki?",
    options: [{ label: 'a', text: 'Ahegereye gasitasiyo y\'inzuzi' }, { label: 'b', text: 'Ahegereye serivisi z\'inzuzi' }, { label: 'c', text: 'Ahegereye aho hamenyekanye' }, { label: 'd', text: 'Serivisi z\'ubutabazi bwa mbere' }],
    correctAnswer: 'd',
  },

  // ===== CATEGORY: TRAFFIC (Amategeko y'Umuhanda) =====
  {
    id: 101, category: 'traffic',
    question: "Icyapa cy'inyongera kigaragaza ikibanza cy'ingando cyangwa cy'abantu benshi bagendera ku nyamaswa kirangwa n'amabara akurikira:",
    options: [{ label: 'a', text: 'Ubururu, umweru n\'umukara' }, { label: 'b', text: 'Umukara umweru n\'umuhondo' }, { label: 'c', text: 'Icyatsi kibisi, umuhondo n\'ikirango cy\'umukara' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 102, category: 'traffic',
    question: "Icyapa cyerekana ahantu amategeko y'Umuhanda urombeje w'ibice byinshi atangirira gukurikizwa, kirangwa n'ibirango (ibimenyetso) by'amabara akurikira:",
    options: [{ label: 'a', text: 'Umweru n\'umukara' }, { label: 'b', text: 'Umweru n\'umutuku' }, { label: 'c', text: 'Umweru n\'umuhondo' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 103, category: 'traffic',
    question: "Igihe ikorwa ry'imirimo ribangamiye cyane cyangwa buke uburyo bwo kugenda mu nzira nyabagendwa, ahakorerwa imirimo hagaragazwa ku buryo bukurikira:",
    options: [{ label: 'a', text: 'Icyapa cyera cya mpande enye, zingana zifite uruhande rwa metero 0.30' }, { label: 'b', text: 'Uruzitiro ruri ku mpera y\'iburyo' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 104, category: 'traffic',
    question: "Iyo mu muhanda, imirimo yihariye ubugari butuma abayobozi bagomba kuva mu mwanya wabo usanzwe kugirango bakomeze urugendo, ahategetswe kunyurwa hagaragazwa n'ikimenyetso gishyirwa aho imirimo irangirira mu ruhande rugenderwamo. Icyo kimenyetso kirangwa n'amabara akurikira:",
    options: [{ label: 'a', text: 'Ubuso bw\'ubururu ikirango cy\'umweru' }, { label: 'b', text: 'Umuzenguruko w\'umutuku, ubuso umweru n\'ikirango cy\'umukara' }, { label: 'c', text: 'Umuzenguruko w\'umutuku, ubuso mu ibara ryera, ikirango mu ibara ry\'umutuku n\'umukara' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 105, category: 'traffic',
    question: "Icyapa cyerekana ko hari amabwiriza yihariye mu buryo bwo kugendera mu cyambu cyangwa ku kibuga cy'indege giteye ku buryo bukurikira:",
    options: [{ label: 'a', text: 'Ishusho mpandeshatu, ubuso mu ibara ryera, ikirango mu ibara ry\'umukara' }, { label: 'b', text: 'Ishusho mpandenye, ubuso mu ibara ry\'ubururu n\'ikirango kiri mu ibara ryera' }, { label: 'c', text: 'Ishusho y\'uruziga mu ibara ry\'ubururu ni ikirango kiri mu ibara ryera' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 106, category: 'traffic',
    question: "Nijoro igihe ijuru rikeye, itara ribonesha icyapa kiranga numero y'ikinyabiziga rigomba gutuma izo numero zisomerwa nibura mu ntera ikurikira:",
    options: [{ label: 'a', text: 'm150' }, { label: 'b', text: 'm50' }, { label: 'c', text: 'm20' }, { label: 'd', text: 'm10' }],
    correctAnswer: 'c'
  },
  {
    id: 107, category: 'traffic',
    question: "Ibyapa byerekana icyago cyidahoraho kandi bigenewe kwerekana aho bagana cyangwa aho berekeza umuhanda nk'igihe cy'impanuka cyangwa hari imirimo ikorwa mu muhanda birangwa n'amabara akurikira:",
    options: [{ label: 'a', text: 'Umweru n\'umukara' }, { label: 'b', text: 'Umweru n\'umuhondo' }, { label: 'c', text: 'Ubuso bw\'umweru gusa' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 108, category: 'traffic',
    question: "Birabujijwe kubangamira imigendere isanzwe y'ibindi binyabiziga kubera ibi bikurikira:",
    options: [{ label: 'a', text: 'Kugabanya umuvuduko kuburyo budasanzwe' }, { label: 'b', text: 'Gukacira feri bidatewe no kwirinda ibyago' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 109, category: 'traffic',
    question: "Iyo kuva bwije kugeza bukeye cyangwa bitewe n'uko ibihe bimeze bitagishoboka kubona neza muri m 200, mu nzira nyabagendwa, romoruki iziritse kuri velomoteri cyangwa ipikipiki idafite akanyabiziga ku ruhande, kandi uburumbarare bwayo cyangwa bw'ibyo yikoreye bukaba butuma itara ry'ikinyabiziga biyikurura ritagaragara, iyo romoruki igaragazwa ku buryo bukurikira:",
    options: [{ label: 'a', text: 'Itara ryera riri kuri romoruki inyuma' }, { label: 'b', text: 'Itara ry\'umuhondo riri kuri romoruki inyuma' }, { label: 'c', text: 'Itara risa n\'icunga riri kuri romoruki inyuma' }, { label: 'd', text: 'Ibi bisubizo byose nibyo' }],
    correctAnswer: 'd'
  },
  {
    id: 110, category: 'traffic',
    question: "Amatara maremare y'ikinyabiziga agomba kuzimwa mu bihe bikurikira:",
    options: [{ label: 'a', text: 'Iyo umuhanda umurikiwe hose kandi umuyobozi ashobora kubona nibura mu ntera ingana na metero 200' }, { label: 'b', text: 'Iyo ikinyabiziga gikurikiye mu ntambwe zitagera muri m100 keretse iyo umuyobozi wacyo ashaka kunyura kucyo akurikiye acana azimya vuba vuba amatara maremare' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 111, category: 'traffic',
    question: "Iyo akanyabiziga gasunikwa cyangwa ibyo gatwaye bidatuma umuyobozi abona neza imbere ye, uwo muyobozi agomba gukora ibi bikurikira:",
    options: [{ label: 'a', text: 'Gushaka umuherekeza' }, { label: 'b', text: 'Gukurura ikinyabiziga cye' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 112, category: 'traffic',
    question: "Ikinyabiziga cyose cyangwa inyamaswa ihagaze umwanya muto cyangwa munini igomba kuba iri aha hakurikira:",
    options: [{ label: 'a', text: 'Mu kaboko k\'iburyo hakurikijwe aho yaganaga uretse igihe ari mu muhanda w\'icyerekezo kimwe' }, { label: 'b', text: 'Ahegereye bishobotse akayira k\'abanyamaguru iyo umuhanda ugafite ariko umwanya w\'ibiziga n\'akayira ntube urenga santimetero 50' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 113, category: 'traffic',
    question: "Iyo ikinyabiziga gihagaritswe n'ijoro ku buryo abayobozi bakigana badashobora kumenya ko kibabereye imbogamizi, kigomba kurangirwa kure n'ikimenyetso cyabigenewe kiri ahantu hagaragara kugirango kiburire hakiri kare abandi bayobozi, ariko ntibireba ibinyabiziga bikurikira:",
    options: [{ label: 'a', text: 'Velomoteri' }, { label: 'b', text: 'Ipikipiki idafite akanyabiziga ku ruhande' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 114, category: 'traffic',
    question: "Abanyamaguru batatanye cyangwa bagize udutsiko tudafatanyije gahunda kdi batanayobowe n'umwarimu bategetswe kunyura mu tuyira turi ku mpande z'umuhanda no ku nkengero zigiye hejuru uretse ubutaka butsindagiye butandukanya imihanda ibiri bwo kunyurwamo gusa n'aba bakurikira:",
    options: [{ label: 'a', text: 'Abanyamaguru bashaka guhagarara akanya gato igihe bambukiranya umuhanda' }, { label: 'b', text: 'Abanyamaguru bagize udutsiko tw\'abantu benshi' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 115, category: 'traffic',
    question: "Ibinyabiziga biherekeranyije mu butumwa ntibishobora gutonda uburebure burenga umurongo wa m 500, iyo bibaye bityo ibinyabiziga biherekeranyije mu butumwa bishobora kugabanywamo amatsinda atonze umurongo utarengeje ibipimo bikurikira:",
    options: [{ label: 'a', text: 'Utarengeje m50' }, { label: 'b', text: 'Utarengeje m100' }, { label: 'c', text: 'Utarengeje 150' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 116, category: 'traffic',
    question: "Ibyapa byereka inkomane y'inzira nyabagendwa n'inzira ya gariyamoshi bigomba iteka kumurikwa cyangwa kugarura urumuri ku buryo bigaragarira nibura mu ntera ikurikira igihe ijuru rikeye:",
    options: [{ label: 'a', text: 'm200' }, { label: 'b', text: 'm 250' }, { label: 'c', text: 'm300' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 117, category: 'traffic',
    question: "Imbibi ziri ku mpera z'ubwihugiko bw'abanyamaguru kandi ziri mu muhanda kimwe n'imbibi n'ibindi bikoresho bigenewe gutuma bagenda mu muhanda nta muvundo zisigwa irangi ry'ibara rikurikira:",
    options: [{ label: 'a', text: 'Irangi ry\'umuhondo ngarurarumuri' }, { label: 'b', text: 'Irangi ry\'umweru ngarurarumuri' }, { label: 'c', text: 'Irangi risa n\'icunga rihishije ngarurarumuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 118, category: 'traffic',
    question: "Kugirango ikinyabiziga kive ahantu hari urwondo cyangwa hanyerera bidasanzwe hashobora gukoreshwa uburyo bukurikira:",
    options: [{ label: 'a', text: 'Inziga zishobora gushyirwaho udushyundu' }, { label: 'b', text: 'Inziga zishobora gushyirwaho iminyururu irwanya ubunyerere' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 119, category: 'traffic',
    question: "Iyo imizigo igizwe n'ibinyampeke, ikawa, amakara, ubwatsi bw'amatungo bidahambiriye, ubugari bwayo bushobora kugera kuri m2 na cm75 ariko iyo iyo mizigo ijyanwa mu karere katarenga km25 uvuye aho yapakiriwe, usibye mu nsisiro, ubugari bwayo bushobora kugera ku bipimo bikurikira:",
    options: [{ label: 'a', text: 'm4' }, { label: 'b', text: 'm3 na cm50' }, { label: 'c', text: 'm3' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 120, category: 'traffic',
    question: "Mu mujyi no ku mihanda y'igihugu igenwa na minisitiri ushinzwe gutwara abantu n'ibintu, ubwikorere ntarengwa ku ikamyo iyo ariyo yose ntibushobora kurenga ibipimo bikurikira:",
    options: [{ label: 'a', text: 'Toni 10' }, { label: 'b', text: 'Toni 16' }, { label: 'c', text: 'Toni 24' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 121, category: 'traffic',
    question: "Iyo bitewe n'imiterere y'ahantu intera itandukanya icyapa n'ahantu habi iri munsi ya m150 ku buryo bugaragara, iyo ntera yerekanishwa icyapa cy'inyongera giteye ku buryo bukurikira:",
    options: [{ label: 'a', text: 'Kare ifite ubuso bw\'ibara ryera' }, { label: 'b', text: 'Urukiramende rufite ubuso bw\'ibara ryera' }, { label: 'c', text: 'Mpandeshatu ifite umuzenguruko utukura' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 122, category: 'traffic',
    question: "Nijoro, amatara yo kubisikana y'ibara ryera cyangwa y'umuhondo agomba, igihe ijoro rikeye kumurika mu muhanda nibura mu ntera ikurikira:",
    options: [{ label: 'a', text: 'm100' }, { label: 'b', text: 'm50' }, { label: 'c', text: 'm40' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 123, category: 'traffic',
    question: "Ikintu cyose cyatuma hahindurwa ibyanditse bireba nyirikarita cyangwa ibiranga ikinyabiziga kigomba kumenyeshwa ibiro by'umusoro, ibyo bikorwa mu gihe kingana gute:",
    options: [{ label: 'a', text: 'Mu mezi 2' }, { label: 'b', text: 'Mu kwezi kumwe' }, { label: 'c', text: 'Mu minsi cumi n\'itanu' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 124, category: 'traffic',
    question: "Kugirango berekane ahantu habi cyane, hakoreshwa ikimenyetso cy'itara ry'umuhondo rimyasa. Ese icyo kimenyetso gihindura iki ku mategeko agenga gutambuka mbere:",
    options: [{ label: 'a', text: 'Ntacyo gihindura' }, { label: 'b', text: 'Abo rireba nibo batambuka mbere' }, { label: 'c', text: 'Abatwaye ibinyabiziga binini nibo batambuka mbere' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 125, category: 'traffic',
    question: "Romoruki zifite ubugari ntarengwa bwa sentimetero 80 zishobora gushyirwaho akagarurarumuri kamwe gusa iyo zikuruwe n'ibinyabiziga bikurikira:",
    options: [{ label: 'a', text: 'Velomoteri' }, { label: 'b', text: 'Ipikipiki ifite akanyabiziga kuruhande' }, { label: 'c', text: 'Igare' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 126, category: 'traffic',
    question: "Amatara maremare y'ibara ryera cyangwa ry'umuhondo agomba nijoro igihe ijuru rikeye kumurika mu ntera ikurikira ku binyabiziga bifite moteri itarengeje ingufu zigera kuri sentimetero kibe 125:",
    options: [{ label: 'a', text: 'm100' }, { label: 'b', text: 'm75' }, { label: 'c', text: 'm25' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 127, category: 'traffic',
    question: "Iyo kuva bwije kugeza bukeye cyangwa bitewe n'uko ibintu bimeze bitagishoboka kubona muri m 200, ibinyabiziga cyangwa imitwaro bifite ubugari burenga m 2.50 iyo bigenda mu nzira nyabagendwa bigaragazwa ku buryo bukurikira:",
    options: [{ label: 'a', text: 'Inyuma ni amatara abiri atukura' }, { label: 'b', text: 'Iyo bibaye ngombwa no ku mpera y\'amabondo y\'ikinyabiziga cyangwa y\'imitwaro ni itara ndangaburumbarare risa n\'icunga rihishije cyangwa ry\'umuhondo' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 128, category: 'traffic',
    question: "Igice cy'umuhanda kiri hakurya y'umurongo mugari wera udacagaguye ugaragaza inkombe mpimbano y'umuhanda kiba kigenewe ibi bikurikira:",
    options: [{ label: 'a', text: 'Guhagararwamo umwanya muto gusa' }, { label: 'b', text: 'Guhagararwamo umwanya muto n\'umunini ndetse no kumihanda irombereje y\'ibisate byinshi n\'imihanda y\'imodoka' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 129, category: 'traffic',
    question: "Birabujijwe kujya mu muhanda w'icyerekezo kimwe ukuriye iburyo n'ibumoso kugira ngo unyure ku kindi kinyabiziga (kunyuranaho), uretse ku binyabiziga bikurikira:",
    options: [{ label: 'a', text: 'Imodoka itwara abanyeshuri' }, { label: 'b', text: 'Amagare' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 130, category: 'traffic',
    question: "Iminyururu n'ibindi byuma bifashisha bishobora kuvanwaho cyangwa binagana, hatabariwemo ibimenyetso byerekana ibyerekezo bigomba gutungurwa ku kinyabiziga ku buryo igihe byizunguza bitarenga impande zihera uburumbarare bw'ikinyabiziga. Ariko ibyo byuma bifashisha ntibigomba gukururuka ku butaka ariko ibyo ntibibujijwe ku binyabiziga bikurikira:",
    options: [{ label: 'a', text: 'Imashini zihinga' }, { label: 'b', text: 'Ibinyabiziga bitwaye ibintu bidashobora gufata inkongi' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 131, category: 'traffic',
    question: "Ku binyabiziga cyangwa ibinyabiziga bikururana igice kirenga ku biziga ntigishobora kurenga ibipimo bikurikira:",
    options: [{ label: 'a', text: 'Iby\'inyuma: m3' }, { label: 'b', text: 'Iby\'imbere: m2.70' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 132, category: 'traffic',
    question: "Uretse bibonewe uruhushya, ubundi birabujijwe gushyira no gukomeza kugendesha imodoka cyangwa romoruki mu nzira nyabagendwa iyo uburemere bw'ibyikorewe burenze uburemere ntarengwa bwemewe n'ikarita iranga ikinyabiziga ariko ibyo ntibikurikizwa ku binyabiziga bikurikira:",
    options: [{ label: 'a', text: 'Ibinyabiziga bya police' }, { label: 'b', text: 'Ibinyabiziga bihinga' }, { label: 'c', text: 'Imashini zikoreshwa mu kubaka imihanda' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'c'
  },
  {
    id: 133, category: 'traffic',
    question: "Gushyira mu muhanda ku buryo budasanzwe ibinyabiziga bikururana birenze bitatu bigomba gutangirwa uruhusa, uretse imashini ihinga iyo zigenda uregendo rutarenze km 25. Igiteranyo cy'uburebure bw'ibyo binyabiziga bikururana ntigishobora kurenga ibipimo bikurikira:",
    options: [{ label: 'a', text: 'm50' }, { label: 'b', text: 'm35' }, { label: 'c', text: 'm25' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 134, category: 'traffic',
    question: "Ibinyamitende itatu bifite moteri bigomba kugira amatara akurikira:",
    options: [{ label: 'a', text: 'Amatara abiri ndangambere n\'amatara abiri ndanganyuma yerekana ko ikinyabiziga gihagaze' }, { label: 'b', text: 'Utugarurarumuri tubiri' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 135, category: 'traffic',
    question: "Ibyapa bibuza n'ibitegeka bikurikizwa gusa aha hakurikira:",
    options: [{ label: 'a', text: 'Mu masangano' }, { label: 'b', text: 'Mu gice cy\'inzira nyabagendwa kiri hagati yaho bishinze n\'inkomane ikurikiyeho ku ruhande rw\'inzira bishinzeho' }, { label: 'c', text: 'Ibyo byapa bishyirwaho hakurikijwe intera ibitandukanya' }, { label: 'd', text: 'B na C ni ibisubizo by\'ukuri' }],
    correctAnswer: 'b'
  },
  {
    id: 136, category: 'traffic',
    question: "Icyapa cy'inyongera kerekana aho bagobokera ibinyabiziga kirangwa n'amabara akurikira:",
    options: [{ label: 'a', text: 'Ubururu, umweru, umutuku' }, { label: 'b', text: 'Umweru, umukara, ubururu' }, { label: 'c', text: 'Umutuku, umweru n\'umukara' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 137, category: 'traffic',
    question: "Icyapa cyerekana uburebure bw'igice cyatera ibyago cyangwa bw'ahantu amabwiriza y'icyo cyapa agomba gukurikizwa kirangwa n'ubuso n'ibimenyetso bikurikira:",
    options: [{ label: 'a', text: 'Ubuso umweru, ikimenyetso ubururu' }, { label: 'b', text: 'Ubuso ubururu, ikimenyetso umweru' }, { label: 'c', text: 'Ubuso ubururu, ikimenyetso umweru n\'umukara' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 138, category: 'traffic',
    question: "Umurongo w'umuhondo ucagaguye uciye ku nkombe nyayo y'umuhanda, umusezero w'inzira y'abanyamaguru cyangwa w'inkengero y'umuhanda yegutse uvuga ibi bikurikira:",
    options: [{ label: 'a', text: 'Guhagarara umwanya muto birabujijwe ku burebure bw\'uwo murongo' }, { label: 'b', text: 'Guhagarara umwanya muto n\'umunini birabujijwe ku burebure bw\'uwo murongo' }, { label: 'c', text: 'Aho bahagarara umwanya munini cyangwa muto' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 139, category: 'traffic',
    question: "Ku binyabiziga cyangwa ibinyabiziga bikururana igice kirenga ku biziga ntigishobora kurenga ibipimo bikurikira:",
    options: [{ label: 'a', text: 'Iby\'inyuma m 3.40' }, { label: 'b', text: 'Iby\'imbere m 2.50' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 171, category: 'traffic',
    question: "Mu migi no ku yindi mihanda y'igihugu igenwa na minisitiri ushinzwe gutwara abantu n'ibintu uburebure ntarengwa kuri buri mitambiko 3 ifungwaho ibiziga bine ni:",
    options: [{ label: 'a', text: 'Toni 24' }, { label: 'b', text: 'Toni 10' }, { label: 'c', text: 'Toni 16' }, { label: 'd', text: 'Toni 53' }],
    correctAnswer: 'a'
  },
  {
    id: 172, category: 'traffic',
    question: "Iyo hagati y'uruhande rw'imbere rwa romoruki n'uruhande rw'inyuma rw'ikinyabiziga kiyikurura hari umwanya urenze m 3 ikibizirikanyije kigomba kugaragazwa ku buryo bukurikira iyo amatara y'ikinyabiziga agomba gucanwa:",
    options: [{ label: 'a', text: 'Agatambaro gatukura gafite nibura cm 50 z\'uruhande' }, { label: 'b', text: 'Itara risa n\'icunga rihishije rigaragara mu mbavu igihe ikibizirikanyije kimuritswe' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 173, category: 'traffic',
    question: "Itara ryo guhagarara ry'ibara ritukura rigomba kuba ridahumisha, kandi rigomba kugaragarira mu ntera ikurikira:",
    options: [{ label: 'a', text: 'Nijoro igihe ijuru rikeye nibura muri m 200' }, { label: 'b', text: 'Ku manywa igihe cy\'umucyo nibura muri m50' }, { label: 'c', text: 'Nijoro nibura muri m 100 igihe ijuru rikeye' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 174, category: 'traffic',
    question: "Birabujijwe kongera ku mpande z'ikinyabiziga kigendeshwa na moteri cyangwa velomoteri ibi bikurikira:",
    options: [{ label: 'a', text: 'Imitako' }, { label: 'b', text: 'Ibintu bifite imigongo cyangwa ibirenga ku mubyimba kandi bishobora gutera ibyago abandi bagenzi' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 175, category: 'traffic',
    question: "Ikintu cyose cyatuma hahindurwa ibyanditswe bireba nyirikarita cyangwa ibiranga ikinyabiziga kigomba kumenyeshwa ibiro by'imisoro haba mu magambo cyangwa mu ibaruwa ishinganye. Ibyo bikorwa mu gihe kingana gute:",
    options: [{ label: 'a', text: 'Mu minsi 5' }, { label: 'b', text: 'Mu minsi 8' }, { label: 'c', text: 'Mu minsi 15' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 176, category: 'traffic',
    question: "Kunyuranaho bikorerwa:",
    options: [{ label: 'a', text: 'Mu ruhande rw\'iburyo gusa' }, { label: 'b', text: 'Igihe cyose ni ibumoso' }, { label: 'c', text: 'Iburyo iyo unyura ku nyamaswa' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 177, category: 'traffic',
    question: "Iyo ubugari bw'inzira nyabagendwa igenderwamo n'ibinyabiziga budahagije kugirango bibisikane nta nkomyi abagenzi bategetswe:",
    options: [{ label: 'a', text: 'Kunyura mu nzira z\'impande z\'abanyamaguru' }, { label: 'b', text: 'Guhagarara aho bageze' }, { label: 'c', text: 'Koroherana' }, { label: 'd', text: 'Gukuraho inkomyi' }],
    correctAnswer: 'c'
  },
  {
    id: 178, category: 'traffic',
    question: "Umuyobozi ugenda mu muhanda igihe ubugari bwawo budatuma anyuranaho nta nkomyi ashobora kunyura mu kayira k'abanyamaguru ariko amaze kureba ibi bikurikira:",
    options: [{ label: 'a', text: 'Umuvuduko w\'abanyamaguru' }, { label: 'b', text: 'Ubugari bw\'umuhanda' }, { label: 'c', text: 'Umubare w\'abanyamaguru' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 179, category: 'traffic',
    question: "Icyapa cyerekana umuvuduko ntarengwa ikinyabiziga kitagomba kurenza gishyirwa ku binyabiziga bifite uburemere ntarengwa bukurikira:",
    options: [{ label: 'a', text: 'Burenga toni 1' }, { label: 'b', text: 'Burenga toni 2' }, { label: 'c', text: 'Burenga toni 24' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 180, category: 'traffic',
    question: "Iyo nta mategeko awugabanya by'umwihariko, umuvuduko ntarengwa w'amapikipiki mu isaha ni:",
    options: [{ label: 'a', text: 'km 25' }, { label: 'b', text: 'km 70' }, { label: 'c', text: 'km 40' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 181, category: 'traffic',
    question: "Ahatari mu nsisiro umuvuduko ntarengwa wa velomoteri mu isaha ni:",
    options: [{ label: 'a', text: 'km 50' }, { label: 'b', text: 'km 40' }, { label: 'c', text: 'km 30' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 182, category: 'traffic',
    question: "Birabujijwe guhagarara akanya kanini aha hakurikira:",
    options: [{ label: 'a', text: 'Mu duhanda tw\'abanyamagare' }, { label: 'b', text: 'Mu duhanda twagenewe velomoteri' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 183, category: 'traffic',
    question: "Amatara maremare y'ikinyabiziga agomba kutamurika mu bihe bikurikira:",
    options: [{ label: 'a', text: 'Iyo umuhanda umurikiwe umuyobozi abasha kureba muri m 200' }, { label: 'b', text: 'Iyo ikinyabiziga kigiye kubisikana nikindi' }, { label: 'c', text: 'Iyo ari mu nsisiro' }, { label: 'd', text: 'Ibisubizo byose nibyo' }],
    correctAnswer: 'b'
  },
  {
    id: 184, category: 'traffic',
    question: "Ubugari bwa romoruki ikuruwe n'igare cyangwa velomoteri ntiburenza ibipimo bikurikira:",
    options: [{ label: 'a', text: 'cm 25' }, { label: 'b', text: 'cm 125' }, { label: 'c', text: 'cm 45' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 185, category: 'traffic',
    question: "Uburyo bukoreshwa kugirango ikinyabiziga kigende gahoro igihe feri idakora neza bwitwa:",
    options: [{ label: 'a', text: 'Feri y\'urugendo' }, { label: 'b', text: 'Feri yo guhagarara' }, { label: 'c', text: 'Feri yo gutabara' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 186, category: 'traffic',
    question: "Nta mwanya n'umwe feri ifungiraho ushobora kurekurana n'ibiziga keretse:",
    options: [{ label: 'a', text: 'Iyo bireba feri y\'urugendo' }, { label: 'b', text: 'Iyo kurekurana ari ibyakanya gato' }, { label: 'c', text: 'Iyo bireba feri yo guhagarara umwanya munini, ubwo kurekurana bikaba bidashoboka bidakozwe n\'umuyobozi' }, { label: 'd', text: 'Byose ni ibisubizo by\'ukuri' }],
    correctAnswer: 'd'
  },
  {
    id: 187, category: 'traffic',
    question: "Ikinyabiziga ntigishobora kugira amatara arenza abiri y'ubwoko bumwe keretse kubyerekeye amatara akurikira:",
    options: [{ label: 'a', text: 'Itara ndangamubyimba' }, { label: 'b', text: 'Itara ryerekana icyerekezo' }, { label: 'c', text: 'Itara ndangaburumbarare' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'd'
  },
  {
    id: 188, category: 'traffic',
    question: "Itara ndanganyuma rigomba gushyirwa aha hakurikira:",
    options: [{ label: 'a', text: 'Ku nguni y\'iburyo y\'ikinyabiziga' }, { label: 'b', text: 'Ku gice cy\'inyuma ku kinyabiziga' }, { label: 'c', text: 'Ahegereye inguni y\'ibumoso y\'ikinyabiziga' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'c'
  },
  {
    id: 189, category: 'traffic',
    question: "Nibura ikinyabiziga gitegetswe kugira uduhanagurabirahuri dukurikira:",
    options: [{ label: 'a', text: '2' }, { label: 'b', text: '3' }, { label: 'c', text: '1' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 190, category: 'traffic',
    question: "Ibiziga by'ibinyabiziga bigendeshwa na moteri n'ibya velomoteri kimwe n'ibya romoruki zabyo bigomba kuba byambaye inziga zihagwa zifite amano n'ubujyakuzimu butari munsi ya milimetero imwe. Ariko ibyo ntibikurikizwa ku binyabiziga bikurikira:",
    options: [{ label: 'a', text: 'Ibinyabiziga bidapakiye kdi bitajya birenza umuvuduko wa km 25 mu isaha ahateganye' }, { label: 'b', text: 'Ibinyabiziga bya police bijya ahatarenga km 25 uvuye aho biba' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 191, category: 'traffic',
    question: "Birabujijwe kugenza ibinyabiziga bigendeshwa na moteri na za romoruki zikururwa nabyo, iyo ibiziga byambaye inziga zidahagwa cyangwa inziga zikururuka zifite umubyimba uri hasi ya cm 4. Ariko ibyo ntibikurikizwa ku binyabiziga bikurikira:",
    options: [{ label: 'a', text: 'Ku binyabiziga by\'ingabo' }, { label: 'b', text: 'Ibinyabiziga bihinga iyo bigendeshwa mu karere katarenga km 25 uvuye aho ziba' }, { label: 'c', text: 'Ibinyabiziga bya police' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 192, category: 'traffic',
    question: "Imirongo yera iteganye n'umurongo ugabanya umuhanda mo kabiri mu burebure bwawo ugaragaza:",
    options: [{ label: 'a', text: 'Ahanyurwa n\'amagare na velomoteri' }, { label: 'b', text: 'Ahanyurwa n\'ingorofani n\'ibinyamitende' }, { label: 'c', text: 'Ahanyurwa n\'abanyamaguru' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 193, category: 'traffic',
    question: "Iyo harimo indi myanya birabujijwe gutwara ku ntebe y'imbere y'imodoka abana badafite imyaka ikurikira:",
    options: [{ label: 'a', text: 'Imyaka 10' }, { label: 'b', text: 'Imyaka 12' }, { label: 'c', text: 'Imyaka 7' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 194, category: 'traffic',
    question: "Iyo ikinyabiziga kitagikora cyangwa cyoherejwe mu mahanga burundu ibyapa ndanga bigomba gukurwaho bikoherezwa mu biro by'imisoro, ibyo bikorwa mu gihe kingana gute:",
    options: [{ label: 'a', text: 'Ibyumweru bibiri' }, { label: 'b', text: 'Amezi abiri' }, { label: 'c', text: 'Ukwezi kumwe' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 195, category: 'traffic',
    question: "Inkombe z'inzira nyabagendwa cyangwa z'umuhanda zishobora kugaragazwa n'ibikoresho ngarurarumuri ibyo bikoresho bigomba gushyirwaho ku buryo abagenzi babibona ku buryo bukurikira:",
    options: [{ label: 'a', text: 'Babona gusa ibumoso bwabo ibyibara ryera' }, { label: 'b', text: 'Iburyo babona iby\'ibara ritukura cyangwa risa n\'icunga rihishije gusa' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 196, category: 'traffic',
    question: "Iyo kuyobya umuhanda ari ngombwa bigaragazwa kuva aho uhera no kuburebure bwawo n'icyapa gifite ubuso bw'amabara akurikira:",
    options: [{ label: 'a', text: 'Umukara' }, { label: 'b', text: 'Umweru' }, { label: 'c', text: 'Umutuku' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 197, category: 'traffic',
    question: "Ku mihanda yagenwe na minisitiri ubifite mu nshingano ibyapa biburira n'ibyapa byerekana bigomba kugaragazwa kuva bwije kugera bukeye n'urumuri rwihariye. Igihe ijuru rikeye intera y'ahagaragara igomba kuba nibura:",
    options: [{ label: 'a', text: 'm50' }, { label: 'b', text: 'm120' }, { label: 'c', text: 'm150' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 198, category: 'traffic',
    question: "Ibizirikisho by'iminyururu cyangwa by'insinga kimwe n'ibindi by'ingoboka bikoreshwa gusa igihe nta kundi umuntu yabigenza kandi ntibishobora gukurikizwa bijya vuba vuba km 20, bigaragazwa ku buryo bukurikira:",
    options: [{ label: 'a', text: 'Agatambaro gatukura kuri cm 50 z\'umuhanda' }, { label: 'b', text: 'Ikimenyetso cy\'itara risa n\'icunga rihishije' }, { label: 'c', text: 'Icyapa cyera cya mpande enye zingana gifite cm 30 kuri buri ruhande' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 199, category: 'traffic',
    question: "Uretse mu mijyi, uburemere ntarengwa bwemewe ku binyabiziga bifatanye bifite imitambiko itatu ni:",
    options: [{ label: 'a', text: 'Toni 12' }, { label: 'b', text: 'Toni 16' }, { label: 'c', text: 'Toni 10' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 200, category: 'traffic',
    question: "Uretse mu mujyi, uburemere ntarengwa ku binyabiziga bifite imitambiko itatu cyangwa irenga hatarimo mukuzungu ni:",
    options: [{ label: 'a', text: 'Toni 10' }, { label: 'b', text: 'Toni 12' }, { label: 'c', text: 'Toni 15' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 201, category: 'traffic',
    question: "Iyo nta mategeko awugabanya by'umwihariko umuvuduko ntarengwa ku modoka zidafite ibizibuza kwiceka ni:",
    options: [{ label: 'a', text: 'km 70 mu isaha' }, { label: 'b', text: 'km 40 mu isaha' }, { label: 'c', text: 'km 25 mu isaha' }, { label: 'd', text: 'km 20 mu isaha' }],
    correctAnswer: 'c'
  },
  {
    id: 202, category: 'traffic',
    question: "Iyo nta mategeko awugabanya by'umwihariko umuvuduko ntarengwa ku modoka zidafite ibizibuza kwiceka ni:",
    options: [{ label: 'a', text: 'km 20 mu isaha' }, { label: 'b', text: 'km 40 mu isaha' }, { label: 'c', text: 'km 35 mu isaha' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 203, category: 'traffic',
    question: "Ikinyabiziga kibujijwe guhagarara akanya kanini aha hakurikira:",
    options: [{ label: 'a', text: 'Imbere y\'ahantu nyabagendwa hinjirwa n\'ahasohokerwa n\'abantu benshi' }, { label: 'b', text: 'Mu muhanda aho ugabanyijemo ibisate bigaragazwa n\'imirongo icagaguye' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 204, category: 'traffic',
    question: "Iyo kuva bwije kugeza bukeye cyangwa bitagishoboka kubona neza muri m 200, udutsiko twose tw'abanyamaguru nk'imperekerane cyangwa udutsiko tw'abanyeshuri bayobowe n'umwarimu, iyo bagenda mu muhanda ku isonga hakaba hari abantu barenze umwe bagomba kugaragazwa kuburyo bukurikira:",
    options: [{ label: 'a', text: 'Imbere ni itara ry\'umuhondo ritwariwe ibumoso' }, { label: 'b', text: 'Inyuma ni itara ryumutuku ritwariwe ibumoso n\'umuntu uri ku murongo w\'inyuma hafi y\'umurongo ugabanya umuhanda mo kabiri' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 205, category: 'traffic',
    question: "Imburira zimurika zemerewe gukoreshwa kugirango bamenyeshe umuyobozi ko bagiye kumunyuraho aha hakurikira:",
    options: [{ label: 'a', text: 'Mu nsisiro cyangwa ahandi hose' }, { label: 'b', text: 'Ahegereye inyamaswa zikurura' }, { label: 'c', text: 'Hafi y\'amatungo' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 206, category: 'traffic',
    question: "Ibinyabiziga bifite ubugari bufite ibipimo bikurikira bigomba kugira amatara ndangaburumbarare:",
    options: [{ label: 'a', text: 'Metero 3' }, { label: 'b', text: 'Metero 2 na cm 50' }, { label: 'c', text: 'Metero 1 na cm 10' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 207, category: 'traffic',
    question: "Nta tara na rimwe cyangwa akagarurarumuri bishobora kuba bifunze kuburyo igice cyabyo cyo hasi cyane kimurika kiba kiri hasi y'ibipimo bikurikira kuva ku butaka igihe ikinyabiziga kidapakiye:",
    options: [{ label: 'a', text: 'cm 30' }, { label: 'b', text: 'cm 20' }, { label: 'c', text: 'cm 50' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 208, category: 'traffic',
    question: "Ahari hejuru cyane y'ubuso bumurika h'amatara ndangambere na ndanganyuma ntihashobora kuba aharenze ibipimo bikurikira hejuru y'ubutaka iyo ikinyabiziga kidapakiye:",
    options: [{ label: 'a', text: 'm1 na cm 50' }, { label: 'b', text: 'm1 na cm 75' }, { label: 'c', text: 'm 1 na cm 80' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 209, category: 'traffic',
    question: "Buri modoka cyangwa buri romoruki ikuruwe n'iyo modoka bishobora kugira itara risa n'icyatsi kibisi bituma umuyobozi yerekana ko yabonye ikimenyetso cy'uwitegura kumunyuraho. Iryo tara rigomba gushyirwa aha hakurikira:",
    options: [{ label: 'a', text: 'Hafi y\'inguni y\'ibumoso bw\'ikinyabiziga' }, { label: 'b', text: 'Inyuma hafi y\'impera y\'ibumoso bw\'ikinyabiziga' }, { label: 'c', text: 'Inyuma ahegereye inguni y\'iburyo' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 210, category: 'traffic',
    question: "Ubugari bw'imizigo yikorewe n'ipikipiki ifite akanyabiziga ko kuruhande kimwe n'ubwa romoruki ikuruwe na bene icyo kinyabiziga ntibushobora kurenza ibipimo bikurikira ku bugari bw'icyo kinyabiziga kidapakiye:",
    options: [{ label: 'a', text: 'm 1.25' }, { label: 'b', text: 'cm 30' }, { label: 'c', text: 'cm 75' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },

  // ===== CATEGORY: PRACTICAL (Ubumenyi bwo Gutwara) =====
  {
    id: 211, category: 'practical',
    question: "Mu gihe telefone yawe ihamagawe utwaye imodoka wakora iki?",
    options: [{ label: 'a', text: 'Kwitaba cyangwa guhagarara ako kanya' }, { label: 'b', text: 'Kutayitaba' }, { label: 'c', text: 'Gushyira imodoka iruhande ukayitaba' }, { label: 'd', text: 'B na C ni ibisubizo by\'ukuri' }],
    correctAnswer: 'c'
  },
  {
    id: 213, category: 'practical',
    question: "Niki wakora mbere y'uko uhindura icyerekezo?",
    options: [{ label: 'a', text: 'Gutanga ikimenyetso cy\'ukuboko no gukoresha amatara ndangacyerekezo' }, { label: 'b', text: 'Itegereze neza niba icyapa kikwemerera guhindura icyerekezo' }, { label: 'c', text: 'A na B n\'ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 214, category: 'practical',
    question: "Niki wakwirinda mugihe ushaka kunyuranaho?",
    options: [{ label: 'a', text: 'Nyuma y\'ikona ugategereza kubona uburyo bwo kunyuranaho' }, { label: 'b', text: 'Mumuhanda w\'icyerekezo kimwe' }, { label: 'c', text: 'Aho utagomba kurenza ibirometero 30 mu isaha' }, { label: 'd', text: 'Ugeze mumuhanda utaringaniye neza' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 215, category: 'practical',
    question: "Mugihe ukurikiranye na romoruki, n'ukubera iki ugomba gusiga umwanya uhagije hagati yawe nayo?",
    options: [{ label: 'a', text: 'Bituma ubasha gukata ikorosi vuba' }, { label: 'b', text: 'Bifasha umuyobozi wa romoruki kukurebera mundorerwamo' }, { label: 'c', text: 'Bifasha romoruki guhagarara byoroshye' }, { label: 'd', text: 'Bikurinda umuyaga' }],
    correctAnswer: 'b'
  },
  {
    id: 216, category: 'practical',
    question: "Utegereje gukata iburyo kwiherezo ry'umuhanda, ukingirijwe nimodoka ihagaze, niki wakora?",
    options: [{ label: 'a', text: 'Guhagarara hanyuma ukagenda gake gake witonze kugezaho ureba neza' }, { label: 'b', text: 'Kwihuta wegera imbere aho ushobora kureba ugafunga ikindi cyerekezo' }, { label: 'c', text: 'Gutegereza abanyamaguru bakakumenyesha ko ntakibazo wakata' }, { label: 'd', text: 'Guhindukiza imodoka vuba kugirango ushake indi nzira wakoresha' }],
    correctAnswer: 'a'
  },
  {
    id: 217, category: 'practical',
    question: "Mugihe uri murugendo rurerure mumuhanda urombereje w'ibice byinshi, niki wakora mugihe wumva utangiye kugira ibitotsi?",
    options: [{ label: 'a', text: 'Gucuranga umuziki cyane' }, { label: 'b', text: 'Kwihuta cyane kugirango usoze urugendo vuba' }, { label: 'c', text: 'Kuva mumuhanda urombereje w\'ibice byinshi, ugahagarara ahantu hatekanye' }, { label: 'd', text: 'Ntagisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 218, category: 'practical',
    question: "Kuki ugomba gucana amatara mugihe hatangiye kwijima?",
    options: [{ label: 'a', text: 'Kugirango akerekanamuvuduko kagaragare neza' }, { label: 'b', text: 'Kugirango abandi biborohere kukubona' }, { label: 'c', text: 'Kugira ngo ujyane nabandi bayobozi bibinyabiziga' }, { label: 'd', text: 'Kuko amatara yo ku muhanda ari kwaka' }],
    correctAnswer: 'b'
  },
  {
    id: 219, category: 'practical',
    question: "Urimo kugenda munzira nyabagendwa ni gute wanyura k'umuyobozi w'igare?",
    options: [{ label: 'a', text: 'Kuvuza ihoni mugihe umunyuraho' }, { label: 'b', text: 'Kumunyuraho umwegereye' }, { label: 'c', text: 'Gusiga umwanya uhagije igihe umunyuraho' }, { label: 'd', text: 'Kugabanya umuvuduko mbere y\'uko umunyuraho' }],
    correctAnswer: 'c'
  },
  {
    id: 220, category: 'practical',
    question: "Igihe ukurikiwe n'ikinyabiziga gitwara abarwayi gicanye amatara y'intabaza arabagirana. Wakora iki?",
    options: [{ label: 'a', text: 'Kugihigamira ako kanya ndetse byaba ngombwa ugahagarara' }, { label: 'b', text: 'Kongera umuvuduko kugirango ugisige' }, { label: 'c', text: 'Kugumana umuvuduko wari ufite' }, { label: 'd', text: 'Guhagarara bitunguranye mu muhanda' }],
    correctAnswer: 'a'
  },
  {
    id: 221, category: 'practical',
    question: "Niki wakora aho banyura bazenguruka?",
    options: [{ label: 'a', text: 'Tanga inzira ku binyabiziga byamaze kwinjira aho banyura bazi' }, { label: 'b', text: 'Tanga inzira kubinyabiziga biremereye gusa' }, { label: 'c', text: 'Komeza kuko abandi bayobozi b\'ibinyabiziga bagomba kuguha inzira' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri' }],
    correctAnswer: 'a'
  },
  {
    id: 223, category: 'practical',
    question: "Utwaye ikinyabiziga inyuma ya romoruki. Umuyobozi wayo akaguha ikimenyetso cyo kumutambukaho iburyo kandi ugana ibumoso, wakora iki?",
    options: [{ label: 'a', text: 'Kugabanya umuvuduko ukareka akagenda' }, { label: 'b', text: 'Gukomeza iburyo bwawe' }, { label: 'c', text: 'Kumunyuraho iburyo bwe' }, { label: 'd', text: 'Kugumana umuvuduko wari ufite ukamuvugiriza ihoni' }],
    correctAnswer: 'a'
  },
  {
    id: 225, category: 'practical',
    question: "Wegereye inzira y'abanyamaguru ugasanga bategereje kwambuka. Ugomba gukora iki?",
    options: [{ label: 'a', text: 'Kureka abakuze n\'abafite ubumuga bagatambuka mbere' }, { label: 'b', text: 'Kugabanya umuvuduko witegura guhagarara' }, { label: 'c', text: 'Gukoresha amatara abamenyesha kwambuka' }, { label: 'd', text: 'Gukoresha ibimenyetso byamaboko bibemerera kwambuka' }],
    correctAnswer: 'b'
  },
  {
    id: 227, category: 'practical',
    question: "Niyihe mpamvu ituma tugomba kugabanya umuvuduko mugihe hari ibihu?",
    options: [{ label: 'a', text: 'Igihe feri idakora' }, { label: 'b', text: 'Igihe uhumishijwe n\'amatara yo kubisikana' }, { label: 'c', text: 'Igihe moteri imara ngo izime' }, { label: 'd', text: 'Nuko biba bitoroshye kubona ikiri imbere' }],
    correctAnswer: 'd'
  },
  {
    id: 228, category: 'practical',
    question: "Niki ugomba gukora igihe uhagaze ku muhanda igihe cy'ibihu?",
    options: [{ label: 'a', text: 'Kureka amatara ndanga akaguma yaka' }, { label: 'b', text: 'Kureka amatara yo kubisikana na kamena-bihu akaguma yaka' }, { label: 'c', text: 'Kureka amatara yo kubisikana akaguma yaka' }, { label: 'd', text: 'Kureka amatara y\'urugendo akaguma yaka' }],
    correctAnswer: 'a'
  },
  {
    id: 231, category: 'practical',
    question: "Inzira nyabagendwa ifite ibyerekezo bibiri, uruhande rw'ibumoso rudufasha iki?",
    options: [{ label: 'a', text: 'Kunyuranaho gusa, ntugaruke iburyo bwawe' }, { label: 'b', text: 'Kunyuranaho cyangwa ugakatira ibumoso' }, { label: 'c', text: 'Hemerewe kugenda imodoka zihuta gusa' }, { label: 'd', text: 'Gukatira iburyo gusa utanyuranyeho' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 232, category: 'practical',
    question: "Ni hehe byemewe kunyuranaho munzira y'icyerekezo kimwe?",
    options: [{ label: 'a', text: 'Ku gisate kiri Ibumoso bw\'umuhanda' }, { label: 'b', text: 'Kunyuranaho ntibyemewe' }, { label: 'c', text: 'Ku gisate kiri iburyo bw\'umuhanda gusa' }, { label: 'd', text: 'Ku gisate cy\'ibumoso cyangwa iburyo' }],
    correctAnswer: 'a'
  },
  {
    id: 233, category: 'practical',
    question: "N'uwuhe muntu ushobora gusimbura ibimenyetso byo mumuhanda, dutegetswe kubaha?",
    options: [{ label: 'a', text: 'Umuyobozi w\'ikinyamitende' }, { label: 'b', text: 'Umunyamaguru' }, { label: 'c', text: 'Umukozi ubifitiye ububasha' }, { label: 'd', text: 'Umuyobozi wa bisi' }],
    correctAnswer: 'c'
  },
  {
    id: 253, category: 'practical',
    question: "Mu bimenyetso bimurika itara ritukura rivuga iki?",
    options: [{ label: 'a', text: 'Hagarara kereste niba ushaka gukata ibumoso' }, { label: 'b', text: 'Hagarara niba ubona ntabyago byaguteza' }, { label: 'c', text: 'Birabujijwe kurenga icyo kimenyetso' }, { label: 'd', text: 'Wemerewe kugenda niba aho asohokera mu masangano y\'umuhanda hafunze' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 254, category: 'practical',
    question: "Mubimenyetso bimurika itara ry'umuhondo risobanura iki?",
    options: [{ label: 'a', text: 'Itegure kugenda' }, { label: 'b', text: 'Birabujijwe gutambuka umurongo wo guhagarara umwanya muto cg igihe uwo murongo udahari icyo kimenyetso ubwacyo' }, { label: 'c', text: 'A na b ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 255, category: 'practical',
    question: "Mubimenyetso bimurika itara ry'icyatsi risobanura iki?",
    options: [{ label: 'a', text: 'Kwitegura kugenda' }, { label: 'b', text: 'Uburenganzira bwo kurenga icyo kimenyetso' }, { label: 'c', text: 'Hagarara niba inzira isohoka mu isangano ry\'imihanda ifunze' }, { label: 'd', text: 'Ntagisubizo cyukuri kirimo' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 256, category: 'practical',
    question: "Umurongo ucagaguye wera mu muhanda usobanura iki?",
    options: [{ label: 'a', text: 'Birabujijwe kuwurenga' }, { label: 'b', text: 'Birabujijwe kuhahagarara' }, { label: 'c', text: 'Wegereye ahaguteza ibyago' }, { label: 'd', text: 'Kunyuranaho ntibyemewe' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 261, category: 'practical',
    question: "Muri iri sangano ry'umuhanda hari icyapa gisobanura 'guhagarara' n'umurongo wera urombereje munzira. Niyihe mpamvu hari iki cyapa cyo 'guhagarara' hano?",
    options: [{ label: 'a', text: 'Biragoye kubona neza mu muhanda munini' }, { label: 'b', text: 'Umuvuduko mu muhanda munini wavanyweho' }, { label: 'c', text: 'Ni mwisangano ry\'umuhanda rikoreshwa cyane' }, { label: 'd', text: 'Hari imirongo iburira ibyago bitunguranye' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 262, category: 'practical',
    question: "Ni iki gikenewe muri ibi bikurikira kugirango ubashe gutwara imodoka mu muhanda biteganywa nitegeko:",
    options: [{ label: 'a', text: 'Uruhushya rwa burundu rwo gutwara ibinyabiziga rugifite agaciro' }, { label: 'b', text: 'Ubwishingizi bw\'ikinyabizaga bugifite agaciro' }, { label: 'c', text: 'Icyemezo cy\'iyandikwa ry\'ikinyabiziga' }, { label: 'd', text: 'Ibisubizo byose nibyo' }],
    correctAnswer: 'd'
  },
  {
    id: 263, category: 'practical',
    question: "Ikinyabiziga gishya gikenerwa gusuzumwa bwambere nyuma y'igihe kingana iki?",
    options: [{ label: 'a', text: 'Nyuma y\'umwaka umwe' }, { label: 'b', text: 'Nyuma y\'imyaka ibiri' }, { label: 'c', text: 'A na b ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri' }],
    correctAnswer: 'b'
  },
  {
    id: 264, category: 'practical',
    question: "Ni ryari ushobora kwakiriza icyarimwe amatara yose ndangacyerekezo y'ikinyabiziga?",
    options: [{ label: 'a', text: 'Mu gihe ushaka kuburira abandi bakoresha umuhanda' }, { label: 'b', text: 'Mu gihe ikinyabiziga cyawe gishobora guteza ibyago' }, { label: 'c', text: 'A na b ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Ntagisubizo cy\'ukuri' }],
    correctAnswer: 'c'
  },
  {
    id: 265, category: 'practical',
    question: "Ugeze ahabereye impanuka yo mumuhanda bwambere ugasanga abakomeretse bikomeye. Wakiriza icyarimwe amatara y'ibyerekezo byombi, niki kindi ushobora gukora?",
    options: [{ label: 'a', text: 'Kumenya neza niba imbangukiragutabara yahamagawe' }, { label: 'b', text: 'Guhagarika ibinyabiziga bindi no kubasaba ubufasha' }, { label: 'c', text: 'A na b ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri' }],
    correctAnswer: 'a'
  },
  {
    id: 267, category: 'practical',
    question: "Wakoze impanuka yo mu muhanda, ni ikihe cyangombwa polisi ishobora kugusaba kucyerekana?",
    options: [{ label: 'a', text: 'Icyemezo cy\'iyandikwa ry\'ikinyabiziga' }, { label: 'b', text: 'Uruhusa rwa burundu rwo gutwara ikinyabiziga' }, { label: 'c', text: 'Uruhushya rwagateganyo' }, { label: 'd', text: 'Imikorere y\'ikinyabiziga' }],
    correctAnswer: 'b'
  },
  {
    id: 268, category: 'practical',
    question: "Uhuye n'ingorane utwaye ikinyabiziga, mu muhanda ufite ibyerekezo bibiri, ufite ikimenyetso kiburira cya mpandeshatu. Wagishyira mu ntera ingana iki uvuye aho ikinyabiziga cyahagaze:",
    options: [{ label: 'a', text: 'Metero 5' }, { label: 'b', text: 'Metero 25' }, { label: 'c', text: 'Metero 45' }, { label: 'd', text: 'Metero 100' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 269, category: 'practical',
    question: "Umuyobozi usunika ipikipiki agomba gufatwa nka:",
    options: [{ label: 'a', text: 'Umunyamaguru' }, { label: 'b', text: 'Umuyobozi w\'ikinyabiziga' }, { label: 'c', text: 'Umugenzi' }, { label: 'd', text: 'A na b ni ibisubizo by\'ukuri' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 270, category: 'practical',
    question: "Icyapa gikoze mw'ishusho ya mpandeshatu kimenyesha:",
    options: [{ label: 'a', text: 'Ibyago' }, { label: 'b', text: 'Ibibujijwe' }, { label: 'c', text: 'Ibitegetswe' }, { label: 'd', text: 'Ntagisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 279, category: 'practical',
    question: "Mu muhanda ufite uruhererekane rw'amakoni, feri y'urugendo ikoreshwa ryari?",
    options: [{ label: 'a', text: 'Mbere ya buri koni' }, { label: 'b', text: 'Muri buri koni' }, { label: 'c', text: 'Nyuma ya buri koni' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 282, category: 'practical',
    question: "Uri umuyobozi wa velomoteri, uhuye n'umwe munshuti zawe agusaba ko wa mutwara ukamusiga ku'wundi muhanda. Ufite imyaka 18 ariko nta ngofero yindi yabigenewe ufite. Wamutwara?",
    options: [{ label: 'a', text: 'Yego' }, { label: 'b', text: 'Yego usibye urugendo rurerure' }, { label: 'c', text: 'Yego usibye urugendo rugufi' }, { label: 'd', text: 'Oya' }],
    correctAnswer: 'd',
    hasImage: true
  },
  {
    id: 284, category: 'practical',
    question: "Mbere yo kunyura kumuyobozi w'ikinyabiziga cy'imitende ibiri, ngomba gucana akaranga cyerekezo k'ibumoso?",
    options: [{ label: 'a', text: 'Yego buri gihe' }, { label: 'b', text: 'Yego igihe hari ikinyabiziga kinkurikiye' }, { label: 'c', text: 'Yego iyo nkurikiwe nibindi binyabiziga by\'imitende ibiri' }, { label: 'd', text: 'Oya nta na rimwe kunyura kubinyabiziga by\'imitende ibiri' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 285, category: 'practical',
    question: "Nshobora kunyuraho umuyobozi w'ikinyabiziga wahagaze imbere y'inzira yabanyamaguru?",
    options: [{ label: 'a', text: 'Yego' }, { label: 'b', text: 'Yego nyuma yo kuvuza ihoni' }, { label: 'c', text: 'Yego mu gihe nkurikiwe n\'ibindi binyabiziga' }, { label: 'd', text: 'Oya' }],
    correctAnswer: 'd',
    hasImage: true
  },
  {
    id: 286, category: 'practical',
    question: "Hejuru y'aka kanunga:",
    options: [{ label: 'a', text: 'Nshobora kunyura ku kinyabiziga icyo aricyose mu gihe nagabanyije umuvuduko' }, { label: 'b', text: 'Nshobora kunyura gusa kubinyabiziga by\'imitende ibiri' }, { label: 'c', text: 'Kunyuranaho ibumoso birabujijwe' }, { label: 'd', text: 'A na b ni ibisubizo by\'ukuri' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 287, category: 'practical',
    question: "Mu gihe cy'impanuka mu muhanda n'ubundi bushotoranyi ni yihe nimero ya telefone y'ubutabazi wahamagara:",
    options: [{ label: 'a', text: '911' }, { label: 'b', text: '100' }, { label: 'c', text: '112' }, { label: 'd', text: '131' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 288, category: 'practical',
    question: "Ugeze bwa mbere ahabereye impanuka yo mu muhanda harimo inkomere wakora iki?",
    options: [{ label: 'a', text: 'Gusohora inkomere mu kinyabiziga' }, { label: 'b', text: 'Kubaha icyo kunywa' }, { label: 'c', text: 'Kumenyesha impanuka no guhamagara ubutabazi' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 289, category: 'practical',
    question: "Mugihe ikinyabiziga cyacu bakinyuzeho:",
    options: [{ label: 'a', text: 'Tugomba kugabanya umuvuduko' }, { label: 'b', text: 'Tugomba kongera umuvuduko' }, { label: 'c', text: 'Tugomba kongera umuvuduko n\'ubwitonzi' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 290, category: 'practical',
    question: "Ntibyemewe gukoresha telephone:",
    options: [{ label: 'a', text: 'Mu biro bya leta' }, { label: 'b', text: 'Mu biro bya Polisi' }, { label: 'c', text: 'Igihe utwaye ikinyabiziga' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'c'
  },
  {
    id: 291, category: 'practical',
    question: "Mbere yo kunyura ku kindi kinyabiziga, ni ngombwa kumenya ko:",
    options: [{ label: 'a', text: 'Nta kindi kinyabiziga kinturutse inyuma' }, { label: 'b', text: 'Umuhanda ubona neza, no kwitondera kunyuranaho' }, { label: 'c', text: 'Ikinyabiziga kinturutse imbere gishaka gukatira I buumoso' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri' }],
    correctAnswer: 'b'
  },
  {
    id: 292, category: 'practical',
    question: "Ikindi kinyabiziga kiguturutse inyuma kiguterera amatara y'urumuri rumyasa, wakora iki?",
    options: [{ label: 'a', text: 'Kongera umuvuduko kugira ngo intera iri hagati yawe n\'ukuri inyuma igumeho' }, { label: 'b', text: 'Fata feri y\'urugendo kugira ngo umwereke ko ugiye guhagarara' }, { label: 'c', text: 'Emerera icyo kinyabiziga kugutambukaho niba imbere ntacyago gihari' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 293, category: 'practical',
    question: "Mu gihe Umuntu ufite ubumuga bwo kutabona yambuka umuhanda yitwaje inkoni yera y'abatabona:",
    options: [{ label: 'a', text: 'Umuyobozi w\'ikinyabiziga agomba gufata iyo nkoni nk\'icyapa kimumenyesha ko agomba guhagarara' }, { label: 'b', text: 'Vuza ihoni ukomeze' }, { label: 'c', text: 'Gabanya nurangiza ukomeze witonze' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'a'
  },
  {
    id: 294, category: 'practical',
    question: "Amatara y'urugendo, mu gihe cy'ibihu:",
    options: [{ label: 'a', text: 'Ni meza kuko atuma ureba kure' }, { label: 'b', text: 'Ni mabi kuko arakugarukira akaguhuma amaso' }, { label: 'c', text: 'Akwizeza ko abandi bakubona' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri' }],
    correctAnswer: 'b'
  },
  {
    id: 295, category: 'practical',
    question: "Gutwara uzungazunga mu muhanda:",
    options: [{ label: 'a', text: 'Ni bibi ku kinyabiziga cy\'imitende ibiri' }, { label: 'b', text: 'Ni bibi igihe cyose' }, { label: 'c', text: 'Ni bibi ku kinyabiziga cy\'imitende ine' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri' }],
    correctAnswer: 'b'
  },
  {
    id: 296, category: 'practical',
    question: "Telephone ngendanwa ntigomba gukoreshwa:",
    options: [{ label: 'a', text: 'Ahari ibimenyetso bimurika' }, { label: 'b', text: 'Igihe utwaye ikinyabiziga Ku muvuduko wa 20km/h' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri' }],
    correctAnswer: 'd'
  },
  {
    id: 297, category: 'practical',
    question: "Kunyuranaho bibujijwe gusa igihe:",
    options: [{ label: 'a', text: 'Igihe mu muhanda hagati hashushanyijemo umurongo w\'umweru ucagaguye' }, { label: 'b', text: 'Umuhanda ushushanyijwemo umurongo wera udacagaguye' }, { label: 'c', text: 'Ikinyabiziga gitwawe ku musozi unyerera' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri' }],
    correctAnswer: 'b'
  },
  {
    id: 298, category: 'practical',
    question: "Mu gihe utwaye ikinyabiziga nijoro ucanye amatara maremare ugahura n'ikindi kinyabiziga giturutse mu kindi cyerekezo:",
    options: [{ label: 'a', text: 'Gukomeza ibumoso' }, { label: 'b', text: 'Kuzimya ucana amatara maremare n\'amagufi' }, { label: 'c', text: 'Kuzimya amatara maremare kugeza ikindi kinyabiziga gitambutse' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 299, category: 'practical',
    question: "Igihe umuyobozi w'inyamaswa, afite inyamaswa idatuje, asaba ko ibinyabiziga bihagarara:",
    options: [{ label: 'a', text: 'Umuyobozi w\'ikinyabiziga agomba guhagarara' }, { label: 'b', text: 'Umuyobozi w\'ikinyabiziga agomba kuvuza ihoni agukomeze' }, { label: 'c', text: 'Umuyobozi w\'ikinyabiziga agomba kugabanya umuvuduko' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'a'
  },
  {
    id: 300, category: 'practical',
    question: "Iyo mu muhanda hashushanyijemo umurongo wera ucagaguye, ntugomba:",
    options: [{ label: 'a', text: 'Ntugomba kujya mu kindi gice cy\'umuhanda' }, { label: 'b', text: 'Ushobora kujya mu kindi gice cy\'umuhanda bibaye ngombwa' }, { label: 'c', text: 'Agomba guhagarika ikinyabiziga' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri' }],
    correctAnswer: 'a'
  },
  {
    id: 301, category: 'practical',
    question: "Kuvuza ihoni bibujijwe:",
    options: [{ label: 'a', text: 'Ku musigiti, ku rusengero, ku rutambiro' }, { label: 'b', text: 'Hafi y\'ibitaro' }, { label: 'c', text: 'Hafi y\'ubuyobozi bwa polisi' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri' }],
    correctAnswer: 'b'
  },
  {
    id: 302, category: 'practical',
    question: "Icyemezo cy'Isuzuma ry'ikinyabiziga kimara igihe kingana iki?",
    options: [{ label: 'a', text: 'Amezi 6 kubinyabiziga bikora ubucuruzi' }, { label: 'b', text: 'Amezi 12 ku binyabiziga bidakora ubucuruzi' }, { label: 'c', text: 'Imyaka 2' }, { label: 'd', text: 'A na B ni ibisubizo by\'ukuri' }],
    correctAnswer: 'd'
  },
  {
    id: 303, category: 'practical',
    question: "N'iyihe myifatire myiza wagira ugeze aho abana bari hafi y'inzira nyabagendwa?",
    options: [{ label: 'a', text: 'Itonde, witegereze ni biba ngongwa ubaburire unitegura kuba wahagarara' }, { label: 'b', text: 'Ihute urenge aho abo bana bari' }, { label: 'c', text: 'Komeza ugume ku muvuduko munini' }, { label: 'd', text: 'Komeza ugendere kuruhande rw\'iburyo' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 304, category: 'practical',
    question: "Umuyobozi w'ikinyabiziga yegereye aho umwana w'umuhungu utwaye akagare k'abana asezera ku nshuti ye. N'iyihe myifatire myiza wagira imbere yabo?",
    options: [{ label: 'a', text: 'Ikomereze nkaho ataragera munzira nyabagendwa' }, { label: 'b', text: 'Itegure kureka uwo mwana w\'umuhungu atambuke, kuko yajya mu muhanda atitaye ku kinyabiziga cyawe' }, { label: 'c', text: 'Gabanya umuvuduko ubwire uwo mwana yambuke ukoresheje ibimenyetso' }, { label: 'd', text: 'Komeza nkaho uwo mwana akiri munzira y\'abanyamaguru' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 305, category: 'practical',
    question: "Nk'umuyobozi w'ikinyabiziga, n'iyihe myitwarire wagira?",
    options: [{ label: 'a', text: 'Umuyobozi w\'ikinyabiziga agomba gukomeza' }, { label: 'b', text: 'Umuyobozi w\'ikinyabiziga agomba kuguma mu ruhande rw\'iburyo kugira ngo ahe inzira umumotari' }, { label: 'c', text: 'Umuyobozi w\'ikinyabiziga agomba gutegereza' }, { label: 'd', text: 'Umuyobozi w\'ikinyabiziga agomba gutanga inzira ayiha umu motari' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 306, category: 'practical',
    question: "Umuyobozi w'ikinyabiziga ageze hafi y'inzira y'abanyamaguru yakwitwara ate?",
    options: [{ label: 'a', text: 'Kugabanya umuvuduko mu gihe cyiza, ukitegura guhagarara' }, { label: 'b', text: 'Gukomeza agendera ku muvuduko uri hejuru, mu gihe umunyamaguru ategereje' }, { label: 'c', text: 'Kuguma ku muvuduko yari afite mu gihe umunyamaguru atarambuka' }, { label: 'd', text: 'Kuvuza ihoni akaguma ku muvuduko yahozeho' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 307, category: 'practical',
    question: "Umuyobozi w'ikinyabiziga akurikiye ibinyabiziga bibiri, yifuza kubinyuraho. N'iki yashingiraho mbere yo kubanyuraho?",
    options: [{ label: 'a', text: 'Ugomba kuzinyuraho zombi' }, { label: 'b', text: 'Sibyiza ko yazinyuraho atabasha kureba neza imbere ye' }, { label: 'c', text: 'Ibyapa by\'aho ageze ntibimwemerera kunyuranaho' }, { label: 'd', text: 'Imbere har\'inzira y\'abanyamaguru' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 308, category: 'practical',
    question: "N'iki umuyobozi w'ikinyabiziga yakora ashaka gukatira iburyo?",
    options: [{ label: 'a', text: 'Vuza ihoni umenyesha umunyegare ko ushaka gukatira iburyo' }, { label: 'b', text: 'Kata ikoni mbere y\'umunyegare' }, { label: 'c', text: 'Emerera umunyegare akomeze inzira ye' }, { label: 'd', text: 'Ongera umuvuuko kugira ngo umutange gukata mbere ye' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 309, category: 'practical',
    question: "N'ayahe matara umuyobozi w'ikinyabiziga agomba gukoresha mugihe cy'ibihu?",
    options: [{ label: 'a', text: 'Amatara kamena bihu y\'imbere n\'ay\'inyuma hamwe n\'amatara magufi' }, { label: 'b', text: 'Amatara kamenabihu y\'imbere n\'ay\'inyuma' }, { label: 'c', text: 'Amatara magufi' }, { label: 'd', text: 'Urumuri rusanzwe' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 312, category: 'practical',
    question: "N'iki umuyobozi w'ikinyabiziga yakora aramutse ahumishijwe n'urumuri rw'amatara y'ikinyabiziga giturutse mu kindi cyerekezo?",
    options: [{ label: 'a', text: 'Humisha ikinyabiziga giturutse mu kindi cyerekezo ucana amatara maremare' }, { label: 'b', text: 'Egera kunkombe y\'iburyo bw\'umuhanda nibinashobioka ugabanye umuvuduko' }, { label: 'c', text: 'Canira amatara ikinyabiziga kiva mukindi cyerekezo' }, { label: 'd', text: 'Ongera umuvuduko kugira ngo usohoke mururwo rumuri vuba bishoboka' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 313, category: 'practical',
    question: "Niki ugomba gukora igihe wegereye ikimenyetso kimurika kiva mucyatsi kijya mumuhondo?",
    options: [{ label: 'a', text: 'Ongera umuvuduko kugirango usoze ikoni' }, { label: 'b', text: 'Komeza kuko itara ry\'icyatsi rigiye kwaka' }, { label: 'c', text: 'Hagarara niba utateza ibyago' }, { label: 'd', text: 'Komeza ubwitonzi witegura guhagarara mugihe itara rihindutse umutuku' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 319, category: 'practical',
    question: "Niki umuyobozi w'ikinyabiziga yakora mu gihe abonye icyapa kiburira cya mpande eshatu gitukura mu muhanda?",
    options: [{ label: 'a', text: 'Hagarara utegereze amabwiriza' }, { label: 'b', text: 'Umuyobozi w\'ikinyabiziga agomba kugabanya umuvuduko ateganya icyago imbere ye' }, { label: 'c', text: 'Kukireka, ukagumana umuvuduko ufite ugakomeza' }, { label: 'd', text: 'Hagarara kuri icyo cyapa cya mpande eshatu mbere yo gukomeza' }],
    correctAnswer: 'b'
  },
  {
    id: 320, category: 'practical',
    question: "Niki umuyobozi w'ikinyabiziga agomba gukora ahuye n'amatungo mu muhanda?",
    options: [{ label: 'a', text: 'Kuvuza ihoni kugirango zihunge' }, { label: 'b', text: 'Umuyobozi w\'ikinyabiziga agomba kugabanya umuvuduko zigatambuka' }, { label: 'c', text: 'Kwatsa amatara maremare kugirango utambuke wihuta mu buryo bushoboka bwose' }, { label: 'd', text: 'Kuvuza ihoni ukanyuraho witonze' }],
    correctAnswer: 'b'
  },
  {
    id: 321, category: 'practical',
    question: "Niki umuyobozi w'ikinyabiziga yakora abonye otobisi iri kuva aho zagenewe guhagararwamo?",
    options: [{ label: 'a', text: 'Gukomeza iruhande kuko ufite uburenganzira bwo gukomeza' }, { label: 'b', text: 'Gabanya umuvuduko maze ureke ikomeze' }, { label: 'c', text: 'Gerageza unyureho kugirango atagutinza' }, { label: 'd', text: 'Menyesha umuyobozi wa otobisi aguhe inzira' }],
    correctAnswer: 'b'
  },
  {
    id: 322, category: 'practical',
    question: "Niki umuyobozi w'ikinyabiziga yakora mugihe ahuye n'ikinyabiziga cyakije itara ry'umuhondo rimyatsa?",
    options: [{ label: 'a', text: 'Mu gihe ikinyabiziga giturutse mu kindi cyerekezo kitagishoboye kugenda' }, { label: 'b', text: 'Mu gihe ikinyabiziga ndakumirwa giturutse mu kindi cyerekezo' }, { label: 'c', text: 'Mu gihe ikinyabiziga giturutse mu cyindi cyerekezo cy\'ihuta' }, { label: 'd', text: 'Kugabanya umuvuduko witegura guhagarara' }],
    correctAnswer: 'd'
  },
  {
    id: 323, category: 'practical',
    question: "Umuyobozi w'ikinyabiziga yakara iki mu gihe anyuzweho nikindi kinyabiziga?",
    options: [{ label: 'a', text: 'Gukomezanya umuvuduko warufite' }, { label: 'b', text: 'Kujya i buryo' }, { label: 'c', text: 'Kujya I bumoso' }, { label: 'd', text: 'Kwongera umuvuduko' }],
    correctAnswer: 'a'
  },
  {
    id: 333, category: 'practical',
    question: "Ni ubuhe buryo bwiza bwakurikizwa igihe hari umuntu wakomerekeye mu mpanuka yo mu muhanda?",
    options: [{ label: 'a', text: 'Ku mushyira kunkengero y\'umuhanda' }, { label: 'b', text: 'Kutamukuramo keretse mugihe hari ibyago byaterwa n\'inkogi y\'umuriro cyangwa akaba ashobora kugongwa n\'ikindi kinyabiziga no guhamagara ababishinzwe' }, { label: 'c', text: 'Gusaba uwakomeretse kunyeganyeza ibice by\'umubiri kugirano umenye aho ibikomere bye bigarukira' }, { label: 'd', text: 'Guhumuriza uwakometse ukamuha ikinyobwo gikonje' }],
    correctAnswer: 'b'
  },
  {
    id: 345, category: 'practical',
    question: "Gutwara ikinyabiziga wasinze:",
    options: [{ label: 'a', text: 'Biremewe kubinyabiziga byabikorera kugiti cyabo' }, { label: 'b', text: 'Biremewe nijoro' }, { label: 'c', text: 'Birabujijwe ku binyabiziga byose bifite moteri' }, { label: 'd', text: 'Ibisubizo byose nibyo' }],
    correctAnswer: 'c'
  },
  {
    id: 347, category: 'practical',
    question: "Ugeze ahari inzira yabanyamaguru barindiriye kwambuka. Ntibatangiye kwambuka, wakora iki?",
    options: [{ label: 'a', text: 'Kuvuza ihoni' }, { label: 'b', text: 'Kwihangana ugatagereza' }, { label: 'c', text: 'Gukomeza' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri' }],
    correctAnswer: 'b'
  },
  {
    id: 348, category: 'practical',
    question: "Igihe utwaye umuntu mu kinyabiziga cyawe, akibagirwa kwambara umukandara wo kwirinda ibyago ugomba:",
    options: [{ label: 'a', text: 'Gukuramo umukandara wo kwirinda ibyago wambaye mukawambara mwembi' }, { label: 'b', text: 'Kubyerengagiza wizeyeko nta mpanuka muri bukore' }, { label: 'c', text: 'Funga cyane umukandara wo kwirinda ibyago wawe' }, { label: 'd', text: 'Kubibutsa kwambara umukandara wo kwirinda ibyago' }],
    correctAnswer: 'd'
  },
  {
    id: 349, category: 'practical',
    question: "Igihe za otobisi zigenewe gutwara banyeshuli zihagaze kugirango zibafate cyangwa bavemo ugomba:",
    options: [{ label: 'a', text: 'Kuvuza ihoni ugakomeza' }, { label: 'b', text: 'Gukomeza ugabanyije umuvuduko n\'ubwitonzi kuko bishoboka ko abanyeshuli bakwambuka bitunguranye' }, { label: 'c', text: 'Nta bwitonzi budasnzwe bukenewe' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'b'
  },
  {
    id: 350, category: 'practical',
    question: "Igihe imodoka iparitse ku nkengero z'umuhanda mugihe cy'ijoro:",
    options: [{ label: 'a', text: 'Imodoka igomba kuba ifunze' }, { label: 'b', text: 'Umuntu ufite uruhushya rwo gutwara ikinyabiziga agomba kuba yicaye mu mwanya w\'umuyobozi' }, { label: 'c', text: 'Amatara yo guhagarara umwanya munini aguma yaka' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'c'
  },
  {
    id: 351, category: 'practical',
    question: "Mu gihe hari undi muyobozi w'ikinyabiziga ugukurikiye watangiye kukunyuraho:",
    options: [{ label: 'a', text: 'Ntugomba kugira undi muyobozi w\'ikinyabiziga unyuraho' }, { label: 'b', text: 'Ugomba kunyura ku kindi kinyabiziga' }, { label: 'c', text: 'Ugomba kunyura kukindi kinyabiziga uvugije ihoni' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 352, category: 'practical',
    question: "Utwaye ikinyabiziga mu muhanda ufite ibyerekezo bibiri. Ikinyabiziga imbere yawe cyiragenda buhoro, imbere yawe umuhanda nta kibazo kunyuranaho, ugomba:",
    options: [{ label: 'a', text: 'Kucyinyuraho bikorewe ibumoso' }, { label: 'b', text: 'Kucyinyuraho bikorewe iburyo' }, { label: 'c', text: 'Kucyinyuraho ukoresheje uruhande urwo arirwo rwose' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'a'
  },
  {
    id: 353, category: 'practical',
    question: "Ibice by'umuhanda byera bigari biteganye n'umurongo ugabanya umuhanda mo kabiri bisobanura:",
    options: [{ label: 'a', text: 'Guhagara kw\'ikinyabiziga' }, { label: 'b', text: 'Aho abanyamaguru bambukira' }, { label: 'c', text: 'Guha ubushobozi binyabiziga' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'b'
  },
  {
    id: 354, category: 'practical',
    question: "Uturebanyuma dukoreshwa:",
    options: [{ label: 'a', text: 'Kwireba' }, { label: 'b', text: 'Kugenzura ibigendera mu muhanda inyuma' }, { label: 'c', text: 'Kureba abicaye inyuma' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'b'
  },

  // ===== CATEGORY: SIGNS (Ibimenyetso by'Umuhanda) =====
  {
    id: 355, category: 'signs',
    question: "Kuki abanyamaguru batemerewe kwambuka umuhanda mw'ikoni cyangwa hafi y'imodoka ihagaze?",
    options: [{ label: 'a', text: 'Ingaruka kubindi binyabiziga' }, { label: 'b', text: 'Ingaruka kubandi bakoresha umuhanda' }, { label: 'c', text: 'Abandi bayobozi bi binyabiziga baza bashobora kutabona abambuka umuhanda' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'd'
  },
  {
    id: 356, category: 'signs',
    question: "Kunyuranaho mw'ikoni:",
    options: [{ label: 'a', text: 'Biremewe' }, { label: 'b', text: 'Ntibyemewe' }, { label: 'c', text: 'Biremewe ukoranye ubwitonzi' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'b'
  },
  {
    id: 357, category: 'signs',
    question: "Umuyobozi w'ikinyabiziga igihe atwaye ikinyabiziga akagira umunaniro utuma yasinzira yakora iki?",
    options: [{ label: 'a', text: 'Gufungura ikirahure cy\'ikinyabiziga cyangwa gushyira ubukonje mu modoka kugirango umwuka mwiza winjire mu kinyabiziga' }, { label: 'b', text: 'Guhagarara akaruhuka harimo no kugendagenda niba bishoboka' }, { label: 'c', text: 'Kunanura amaboko no gufunga amaso mugihe gito' }, { label: 'd', text: 'Kongera ubushyuhe mu kinyabiziga' }],
    correctAnswer: 'b'
  },
  {
    id: 358, category: 'signs',
    question: "Niki umuyobozi w'ikinyabiziga yakora igihe atwaye ikinyabiziga mugihe cy'ibihu, imvura nyinshi, umwuzure cyangwa umukungugu mwinshi?",
    options: [{ label: 'a', text: 'Kugendera mu tuyira turi kumpande zu muhanda, ucunga ibimenyetso bigarura urumuri' }, { label: 'b', text: 'Kugabanya umuvuduko hanyuma ugakoresha amatara magufi' }, { label: 'c', text: 'Gucana amatara maremare hanyuma ukagenda gahoro' }, { label: 'd', text: 'Kugendera mu murongo ugabanya umuhanda mo kabiri unareba ibimenyestso by\'umuhanda bigarura urumuri' }],
    correctAnswer: 'b'
  },
  {
    id: 359, category: 'signs',
    question: "Muri ibi byapa ni ubuhe bwoko bw'ibyapa bitegeka byo mu muhanda?",
    options: [{ label: 'a', text: 'Ibiri mw\'ishusho y\'urukiramende n\'umuzenguruko w\'umuhondo' }, { label: 'b', text: 'Ibiri mw\'ishusho ya mpande eshatu mu n\'uzenguruko mw\'ibara ry\'ubururu' }, { label: 'c', text: 'Ibiri mw\'ishusho y\'uruziga n\'umuzenguruko mw\'ibara ry\'umutuku' }, { label: 'd', text: 'Ibiri mw\'ishusho ya mpande enye zingana mubuso bw\'umukara' }],
    correctAnswer: 'c'
  },
  {
    id: 360, category: 'signs',
    question: "Ugeze mu masangano y'umuhanda aho usanga ibimenyetso bimurika bidakora, wakora iki igihe umukozi ubifiye ububasha aguhaye ikimenyetso kimurika?",
    options: [{ label: 'a', text: 'Gukata ibumoso gusa' }, { label: 'b', text: 'Gukata iburyo gusa ugakomeza imbere' }, { label: 'c', text: 'Guhagarara kumurongo wo guhagarara umwanya moto' }, { label: 'd', text: 'Komeza imbere gusa' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 361, category: 'signs',
    question: "Amatara ndangacyerekezo agomba kugaragara nijoro igihe ijuru rikeye mu ntera nibura ya:",
    options: [{ label: 'a', text: 'm 100' }, { label: 'b', text: 'm 200' }, { label: 'c', text: 'm150' }, { label: 'd', text: 'm250' }],
    correctAnswer: 'c'
  },
  {
    id: 362, category: 'signs',
    question: "Umurongo ucagaguye uvuga ko buri muyobozi abujijwe kuwurenga uretse mu gihe:",
    options: [{ label: 'a', text: 'Agomba kunyura ku kindi kinyabiziga' }, { label: 'b', text: 'Gukatira ibumoso' }, { label: 'c', text: 'Guhindukira cyangwa kujya mukindi gice cy\'umuhanda' }, { label: 'd', text: 'Ibi bisubizo byose nibyo' }],
    correctAnswer: 'd'
  },
  {
    id: 363, category: 'signs',
    question: "Igice cy'inzira nyabagendwa kigarukira kumirongo ibiri yera icagaguye ibangikanye kandi gifite ubugari budahagije kugirango imodoka zitambuke neza kiba ari:",
    options: [{ label: 'a', text: 'Inzira y\'abanyamaguru' }, { label: 'b', text: 'Agahanda k\'amagare' }, { label: 'c', text: 'A na B byose ni ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 364, category: 'signs',
    question: "Icyapa kimenyesha kugendera mu muhanda ubisikanirwamo gifite:",
    options: [{ label: 'a', text: 'Ishusho y\'uruziga mw\'ibara ritukura, ubuso bwera n\'ikirango cy\'umukara' }, { label: 'b', text: 'Ishusho ya mpandeshatu mw\'ibara ritukura, ubuso bwera n\'ikirango cy\'umukara' }, { label: 'c', text: 'Ishusho ya mpandeshatu mw\'ibara ritukura, ubuso bw\'ubururu n\'ikirango cy\'umukara' }, { label: 'd', text: 'Ishusho y\'uruziga mw\'ibara ritukura, ubuso bw\'ubururu n\'ikirango cy\'umukara' }],
    correctAnswer: 'b'
  },
  {
    id: 365, category: 'signs',
    question: "Ikinyabiziga kigendeshwa na moteri n'ikinyabiziga gikururwa n'inyamaswa ntibishobora gukurura:",
    options: [{ label: 'a', text: 'Ibinyabiziga birenze kimwe' }, { label: 'b', text: 'Ibinyabiziga bipakiye birenze bibiri' }, { label: 'c', text: 'Ibinyabiziga birenze bibiri' }, { label: 'd', text: 'B na C ni byo' }],
    correctAnswer: 'c'
  },
  {
    id: 366, category: 'signs',
    question: "Iki cyapa kivuga:",
    options: [{ label: 'a', text: 'Aho imihanda ihurira' }, { label: 'b', text: 'Inkomane y\'aho umuhanda umwe urasukira iburyo' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd',
    hasImage: true
  },
  {
    id: 367, category: 'signs',
    question: "Iki cyapa gisobanura ibi bikurikira:",
    options: [{ label: 'a', text: 'Birabujijwe kunyura ku kindi kinyabiziga' }, { label: 'b', text: 'Gutambuka mbere kw\'ibinyabiziga bituruka aho ujya' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cyukuri kirimo' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 368, category: 'signs',
    question: "Utugarurarumuri turi ku ruhande rw'imbere rw'ikinyabiziga tugomba gusa:",
    options: [{ label: 'a', text: 'N\'umuhondo' }, { label: 'b', text: 'N\'umutuku' }, { label: 'c', text: 'N\'umweru' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 369, category: 'signs',
    question: "Iki cyapa kivuga:",
    options: [{ label: 'a', text: 'Iherezo ryo gutambuka mbere' }, { label: 'b', text: 'Gutambuka mbere kw\'ibinyabiziga biturutse imbere aho ujya' }, { label: 'c', text: 'Gutambuka mbere y\'ibinyabiziga biturutse imbere' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 370, category: 'signs',
    question: "Iki cyapa kigizwe:",
    options: [{ label: 'a', text: 'Ishusho mpandeshatu, ubuso ubururu' }, { label: 'b', text: 'Ishusho mpandeshatu, ubuso umukara' }, { label: 'c', text: 'Ishusho mpandeshatu, ubuso umweru' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 371, category: 'signs',
    question: "Iki cyapa kivuga:",
    options: [{ label: 'a', text: 'Ifungana ry\'umuhanda iburyo' }, { label: 'b', text: 'Ifungana ry\'umuhanda w\'akayira gasatira umuhanda ibumoso' }, { label: 'c', text: 'Akayira gato' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 372, category: 'signs',
    question: "Umuyobozi ubonye ko hari undi umukurikiye ashaka kumunyuraho agomba kubahiriza ibi bikurikira:",
    options: [{ label: 'a', text: 'Kwegera i ruhande rw\'iburyo bw\'umuhanda' }, { label: 'b', text: 'Kongera umuvuduko' }, { label: 'c', text: 'Guhagarara' }, { label: 'd', text: 'A na C ni byo bisubizo by\'ukuri' }],
    correctAnswer: 'a'
  },
  {
    id: 373, category: 'signs',
    question: "Iki cyapa cyerekana:",
    options: [{ label: 'a', text: 'Ifungana ry\'umuhanda' }, { label: 'b', text: 'Ifungana ry\'umuhanda n\'akayira gasatira umuhanda i bumoso' }, { label: 'c', text: 'Umuhanda utaringaniye' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd',
    hasImage: true
  },
  {
    id: 374, category: 'signs',
    question: "Icyi cyapa gisobanura:",
    options: [{ label: 'a', text: 'Ntihanyurwa mu byerekezo byombi' }, { label: 'b', text: 'Ntihanyurwa n\'abandi uretse abahatuye' }, { label: 'c', text: 'Hanyurwa mu cyerekezo kimwe gusa' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 375, category: 'signs',
    question: "Icyi cyapa cyerekana:",
    options: [{ label: 'a', text: 'Ifungana ry\'umuhanda' }, { label: 'b', text: 'Umuhanda unyerera' }, { label: 'c', text: 'Umuhanda utaringaniye' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd',
    hasImage: true
  },
  {
    id: 376, category: 'signs',
    question: "Iki cyapa kivuga:",
    options: [{ label: 'a', text: 'Ikoni iburyo' }, { label: 'b', text: 'Akazamuko gashinze cyane' }, { label: 'c', text: 'Akamanuko gashobora gutera ibyago' }, { label: 'd', text: 'B na C byose ni ukuri' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 377, category: 'signs',
    question: "Iyo umuhanda ugabanijemo ibisate bibiri kandi ugendwamo mu byerekezo byombi umuyobozi abujijwe:",
    options: [{ label: 'a', text: 'Kugendera mu gisate cy\'iburyo' }, { label: 'b', text: 'Kunyuranaho' }, { label: 'c', text: 'Kugendera mu gisate cy\'ibumoso' }, { label: 'd', text: 'Ibisubizo byose ni byo' }],
    correctAnswer: 'c'
  },
  {
    id: 378, category: 'signs',
    question: "Icyapa kimenyesha kugendera mu muhanda ubisikanirwamo gifite:",
    options: [{ label: 'a', text: 'Ishusho y\'uruziga mw\'ibara ritukura, ubuso bwera n\'ikirango cy\'umukara' }, { label: 'b', text: 'Ishusho ya mpandeshatu mw\'ibara ritukura, ubuso bwera n\'ikirango cy\'umukara' }, { label: 'c', text: 'Ishusho ya mpandeshatu mw\'ibara ritukura, ubuso bw\'ubururu n\'ikirango cy\'umukara' }, { label: 'd', text: 'Ishusho y\'uruziga mw\'ibara ritukura, ubuso bw\'ubururu n\'ikirango cy\'umukara' }],
    correctAnswer: 'b'
  },
  {
    id: 379, category: 'signs',
    question: "Icyapa cyerekana inzira y'amatungo itegetswe giteye:",
    options: [{ label: 'a', text: 'Uruziga mubuso bw\'ubururu, ishusho y\'inka mu ibara ry\'umukara' }, { label: 'b', text: 'Uruziga mu ibara ryera, ishusho y\'inka mwibara ry\'ubururu' }, { label: 'c', text: 'Uruziga mu buso bw\'ibara ry\'ubururu, ishusho y\'inka mu ibara ryera n\'ikirango cy\'umukara' }, { label: 'd', text: 'Mpande eshatu mu buso bw\'ibara ry\'umweru n\'ishusho y\'inka mu ibara ry\'umukara' }],
    correctAnswer: 'd'
  },
  {
    id: 380, category: 'signs',
    question: "Icyapa cyerekana ko bibujijwe kuvuza amahoni kirangwa na:",
    options: [{ label: 'a', text: 'Ishusho y\'uruziga, ubuso bw\'ubururu, ikiranga cy\'umukara' }, { label: 'b', text: 'Ishusho y\'uruziga, ubuso bw\'ubururu, ikiranga cy\'umweru' }, { label: 'c', text: 'Ishusho y\'uruziga, ubuso bw\'umweru, ikiranga cy\'umukara' }, { label: 'd', text: 'Ntagisubizi cy\'ukuri kirimo' }],
    correctAnswer: 'c'
  },
  {
    id: 381, category: 'signs',
    question: "Ibyapa biburira nibyo gutambuka mbere birangwa:",
    options: [{ label: 'a', text: 'Ishusho mpandeshatu mw\'ibara ritukura, ubuso bwera n\'ikiranga mu ibara ry\'umukara' }, { label: 'b', text: 'Ishusho mpandeshatu mw\'ibara ritukura, ubuso bw\'ubururu n\'ikiranga mu ibara ry\'umukara' }, { label: 'c', text: 'Ishusho y\'uruziga mw\'ibara ritukura, ubuso bw\'ubururu n\'ikiranga mu ibara ry\'umukara' }, { label: 'd', text: 'Ishusho y\'uruziga mw\'ibara ritukura, ubuso bwera n\'ikiranga mu ibara ry\'umukara' }],
    correctAnswer: 'a'
  },
  {
    id: 382, category: 'signs',
    question: "Ibyapa bibuza n'ibitegeka bikurikizwa gusa:",
    options: [{ label: 'a', text: 'Mumasangano' }, { label: 'b', text: 'Mu bimenyetso bimurika' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'd'
  },
  {
    id: 383, category: 'signs',
    question: "Ibyapa biburira bibereyeho kumenyesha umugenzi:",
    options: [{ label: 'a', text: 'Ko hari icyago' }, { label: 'b', text: 'Icyago kidasobanuye ukundi' }, { label: 'c', text: 'Imiterere y\'icyago gitunguranye' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a'
  },
  {
    id: 384, category: 'signs',
    question: "Ibyapa by'inyongera bishobora kumenyesha:",
    options: [{ label: 'a', text: 'Ibitegetswe byihariye gusa' }, { label: 'b', text: 'Ubugerure cyangwa amarengamategeko rusange cyangwa ibibujijwe ndetse n\'ibitegetswe byihariye' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 385, category: 'signs',
    question: "Ishusho y'icyapa kivuga 'ugukikira' bitegetswe ni:",
    options: [{ label: 'a', text: 'Mpandeshatu' }, { label: 'b', text: 'Uruziga' }, { label: 'c', text: 'Urukiramende' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 386, category: 'signs',
    question: "Icyapa kivuga 'icyerekezo gitegetswe' kigizwe n'ikirango cy'ibara:",
    options: [{ label: 'a', text: 'Umweru' }, { label: 'b', text: 'Umutuku' }, { label: 'c', text: 'Ubururu n\'ikirango cy\'umweru' }, { label: 'd', text: 'Umukara' }],
    correctAnswer: 'c'
  },
  {
    id: 387, category: 'signs',
    question: "Iki kimenyetso gitanzwe n'umukozi ubifitiye ububasha cyo guhagarara:",
    options: [{ label: 'a', text: 'Ku bakoresha umuhanda ba muturutse imbere' }, { label: 'b', text: 'Ku bakoresha umuhanda bose bamuturutse imbere n\'inyuma' }, { label: 'c', text: 'Kubakoresha umuhanda bose bamuturutse inyuma' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 394, category: 'signs',
    question: "Kuri iki cyapa cyo mu muhanda cyambere kintegeka:",
    options: [{ label: 'a', text: 'Kugendera k\'umuvuduko uri hejuru ya 30km/h' }, { label: 'b', text: 'Kutarenza umuvuduko wa 30km/h' }, { label: 'c', text: 'Birabujijwe kugendera kumuvuduko uri hejuru ya 30km/h' }, { label: 'd', text: 'Nta gisubizo cyukuri' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 395, category: 'signs',
    question: "Mpagaze mu murongo wo guhagarara umwanya muto:",
    options: [{ label: 'a', text: 'Nshobora gukata iburyo' }, { label: 'b', text: 'Nshobora gukata ibumoso' }, { label: 'c', text: 'Nshobora gukata ibumoso cyangwa iburyo' }, { label: 'd', text: 'Ntagisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 397, category: 'signs',
    question: "Ndashaka kugata ibumoso. Imodoka y'icyatsi yaje irahagarara. Ninde ufite uburenganzira bwo gutambuka mbere?",
    options: [{ label: 'a', text: 'Mfite uburenganzira bwo gutambuka mbere' }, { label: 'b', text: 'Imodoka y\'icyatsi ifite uburenganzira bwo gutambuka mbere' }, { label: 'c', text: 'Twembi ntaburenganzira bwo gutambuka mbere gusa tugomba gutambukana ubwitonzi' }, { label: 'd', text: 'Ntagisubizo nakimwe kirimo' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 400, category: 'signs',
    question: "Umuyobozi wikinyabiziga aritegura kunyuraho ibumoso:",
    options: [{ label: 'a', text: 'Nshobora kumunyuraho nyuze iburyo' }, { label: 'b', text: 'Sinshobora kumunyura' }, { label: 'c', text: 'Nshobora kumunyura nciye ibumoso ariko mbonye ko mfite umwanya uhagije' }, { label: 'd', text: 'Ntagisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 403, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Guhagarara, aho abanyeshuri bambukira' }, { label: 'b', text: 'Hagarara akanya gato' }, { label: 'c', text: 'Ibindi binyabiziga bigomba kuguha inzira' }, { label: 'd', text: 'Gutanga umwanya ku bindi binyabiziga i buryo bwawe' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 404, category: 'signs',
    question: "Iki cyapa gisobanura iki mu nkomane?",
    options: [{ label: 'a', text: 'Tanga inzira ku binyabiziga binini' }, { label: 'b', text: 'Gabanya umuvuduko uhe inzira abanyamaguru' }, { label: 'c', text: 'Tanga inzira ku binyabiziga bigenda mu muhanda munini wegera' }, { label: 'd', text: 'Tanga inzira ku ibinyabiziga biturutse iburyo bwawe' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 405, category: 'signs',
    question: "Iki cyapa gisobanura iki aho banyura bazengurutse?",
    options: [{ label: 'a', text: 'Tanga inzira ku binyabiziga biri mu muhanda munini' }, { label: 'b', text: 'Tanga inzira ku binyabiziga biturutse i bumoso' }, { label: 'c', text: 'Tanga inzira ku ma kamyo na za otobisi' }, { label: 'd', text: 'Ibinyabiziga byose uretse amapikipiki bigomba gutanga inzira' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 406, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Komeza imbere gusa' }, { label: 'b', text: 'Aho kunyuranaho imbere' }, { label: 'c', text: 'Aho guhagarara umwanya munini' }, { label: 'd', text: 'Inzira y\'icyerekezo kimwe' }],
    correctAnswer: 'a',
  },
  {
    id: 407, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Umuhanda urombereje w\'ibice byinshi ibumoso' }, { label: 'b', text: 'Umuhanda uyoborejwe i bumoso' }, { label: 'c', text: 'Ibinyabiziga biturutse iburyo bifite uburenganzira bwo gutambuka mbere' }, { label: 'd', text: 'Kata i bumoso gusa' }],
    correctAnswer: 'd',
    hasImage: true
  },
  {
    id: 408, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Kunyuranaho bikorerwa i buryo gusa' }, { label: 'b', text: 'Umuhanda uyoborejwe i buryo' }, { label: 'c', text: 'Kata i buryo gusa' }, { label: 'd', text: 'Umuhanda munini urasukira i bumoso' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 409, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Birabujijwe gukata i buryo' }, { label: 'b', text: 'Tanga inzira ku bindi binyabiziga bigenda mu gihe ugiye gukatira iburyo' }, { label: 'c', text: 'Kata i buryo mu gihe nta bindi binyabiziga biturutse mu kindi cyerekezo' }, { label: 'd', text: 'Nta nkengero y\'umuhanda yegutse iri i buryo' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 410, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Birabujijwe guhindukira' }, { label: 'b', text: 'Birabijijwe gusubira inyuma' }, { label: 'c', text: 'Umuhanda unyerera imbere' }, { label: 'd', text: 'Ntibyemewe kugendera mu byerekezo byombi' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 411, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Umuhanda urombereje w\'ibice byinshi ku birometero 50' }, { label: 'b', text: 'Intera nto ntarengwa ya metero 50 hagati y\'ibinyabiziga' }, { label: 'c', text: 'Umuvuduko urenga ibirometero 50 mu isaha' }, { label: 'd', text: 'Umuvuduko ntarengwa ugarukira ku birometero 50 mu isaha' }],
    correctAnswer: 'd',
    hasImage: true
  },
  {
    id: 412, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Birabujijwe ku binyabiziga bitwara abakozi ba leta' }, { label: 'b', text: 'Birabujijwe guhagara umwanya munini' }, { label: 'c', text: 'Birabujijwe ku binyabiziga by\'abikorera ki giti cyabo' }, { label: 'd', text: 'Parikingi' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 413, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Aho guhagararwamo n\'abanyamagare imbere' }, { label: 'b', text: 'Aho abana bagenewe kwiga gutwara amagare' }, { label: 'c', text: 'Inzira y\'iminyamitende n\'abanyamaguru itegetswe' }, { label: 'd', text: 'Abanyamagare bagomba kuva ku igare bakagendesha amaguru' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 414, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Uburemere ntarengwa bwemewe bwa toni 3' }, { label: 'b', text: 'Ntihanyurwa n\'ibinyabiziga bigenewe gutwara ibicuruzwa' }, { label: 'c', text: 'Ntihanyurwa n\'ibinyabiziga bifite imitambiko itatu' }, { label: 'd', text: 'Hanyurwa n\'ibinyabiziga bifite imitambiko itatu gusa' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 415, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Inkomane banyuramo bazengurutse' }, { label: 'b', text: 'Biremewe guhindukira' }, { label: 'c', text: 'Inzira y\'icyerekezo kimwe imbere' }, { label: 'd', text: 'Birabujijwe guhindukira' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 416, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Umuhanda ugabanijwemo ibisate bibiri' }, { label: 'b', text: 'Umuhanda ugabanijwemo ibisate bine' }, { label: 'c', text: 'Inzira y\'icyerekezo kimwe' }, { label: 'd', text: 'Ukugendera mu muhanda ubisikanirwamo' }],
    correctAnswer: 'd',
    hasImage: true
  },
  {
    id: 417, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Umuhanda utaringaniye i buryo' }, { label: 'b', text: 'Akamanuko gashobora gutera ibyago' }, { label: 'c', text: 'Ahantu umuhanda umeze nabi' }, { label: 'd', text: 'Uguhinguka ku mwaro cyangwa ku nkombe' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 418, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Akazamuko gashinze cyane' }, { label: 'b', text: 'Umuhanda utaringaniye i bumoso' }, { label: 'c', text: 'Ahantu umuhanda umeze nabi' }, { label: 'd', text: 'Ahegereye utununga' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 419, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Akazamuko gashinze cyane' }, { label: 'b', text: 'Umuyaga w\'intambike' }, { label: 'c', text: 'Uruhererekane rw\'amakoni' }, { label: 'd', text: 'Umuhanda unyerera' }],
    correctAnswer: 'd',
    hasImage: true
  },
  {
    id: 420, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Abana' }, { label: 'b', text: 'Inzira y\'abanyamaguru – Itegure guhagarara' }, { label: 'c', text: 'Ikibuga cy\'imikino cy\'abana' }, { label: 'd', text: 'Ikibuga cy\'imyidagaduro' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 421, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Isoko ry\'amatungo' }, { label: 'b', text: 'Ivuriro ry\'amatungo' }, { label: 'c', text: 'Uruzitiro rw\'amatungo' }, { label: 'd', text: 'Akayira k\'amatungo' }],
    correctAnswer: 'd',
    hasImage: true
  },
  {
    id: 423, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Tanga inzira' }, { label: 'b', text: 'Icyago' }, { label: 'c', text: 'Icyerekezo kimwe' }, { label: 'd', text: 'Ntihanyurwa' }],
    correctAnswer: 'a',
    hasImage: true,
    signCode: 'B5'
  },
  {
    id: 425, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Aho banyura bazengurutse' }, { label: 'b', text: 'Cyerekana umuhanda w\'ibisate bitatu' }, { label: 'c', text: 'Cyerekana ahegereye inkomane' }, { label: 'd', text: 'Ntagisuzo cy\'ukuri kirimo' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 426, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Hanyurwa mu cyerekezo kimwe' }, { label: 'b', text: 'Ntihanyurwa' }, { label: 'c', text: 'Umuhanda udakomeza' }, { label: 'd', text: 'Ntagisuzo cy\'ukuri kirimo' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 428, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Aho imihanda ihurira' }, { label: 'b', text: 'Inkomane y\'aho umuhanda umwe urasukira iburyo' }, { label: 'c', text: 'Umuhanda udakomeza' }, { label: 'd', text: 'Nta gisubizo kirimo' }],
    correctAnswer: 'd',
    hasImage: true
  },
  {
    id: 429, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Iherezo ry\'umuhanda urombeje w\'ibice byinshi' }, { label: 'b', text: 'Birabujijwe kunyura mu mu muhanda w\'ikindi cyerekezo' }, { label: 'c', text: 'Birabujijwe kunyuranaho' }, { label: 'd', text: 'Birabujijwe guhagara ku iteme' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 430, category: 'signs',
    question: "Iki kimenyetso kiri mu muhanda kivuze iki?",
    options: [{ label: 'a', text: 'Biremewe kunyuranaho' }, { label: 'b', text: 'Umuyobozi abujijwe kukirenga' }, { label: 'c', text: 'Wegereye icyapa cyo guhagarara umwanya muto' }, { label: 'd', text: 'Umuhanda ufunganye' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 431, category: 'signs',
    question: "Iki kimenyetso kiri mu muhanda kivuze iki?",
    options: [{ label: 'a', text: 'Umuyobozi abujijwe kurenga umurongo wera ucagaguye cyeretse mugihe bitateza icyago' }, { label: 'b', text: 'Birabujijwe kunyuranaho' }, { label: 'c', text: 'Biremewe kunyuranaho ariko nturenge umurongo wera ucagaguye' }, { label: 'd', text: 'Birabujijwe gusubira inyuma' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 432, category: 'signs',
    question: "Mu gihe utwaye ikinyabiziga uva kuri A ugana kuri B, Iki kimenyetso kiri mu muhanda kivuze iki?",
    options: [{ label: 'a', text: 'Umuyobozi ashobora kurenga umurongo wera udacagaguye mugihe cyo guhindukira gusa' }, { label: 'b', text: 'Umuyobozi w\'ikinyabiziga abujijwe kunyuranaho, uretse gusa abayobozi b\'ibinyamitende nibo bashobora kurenga umurongo wera udacagaguye' }, { label: 'c', text: 'Umuyobozi w\'ikinyabiziga abujijwe kunyuranaho arenze umurongo wera udacagaguye' }, { label: 'd', text: 'Umuyobozi w\'ikinyabiziga ashobora kunyuranaho mu gihe bitateza icyago' }],
    correctAnswer: 'd',
    hasImage: true
  },
  {
    id: 433, category: 'signs',
    question: "Mu gihe utwaye ikinyabiziga uva kuri A ugana kuri B, Iki kimenyetso kiri mu muhanda kivuze iki?",
    options: [{ label: 'a', text: 'Umuyobozi w\'ikinyabiziga ashobora kunyuranaho arenze umurongo wera udacagaguye' }, { label: 'b', text: 'Umuyobozi w\'ikinyabiziga abujijwe kunyuranaho arenze imirongo yera' }, { label: 'c', text: 'Umuyobozi w\'ikinyabiziga yemerewe kunyuranaho' }, { label: 'd', text: 'Abayobozi b\'ibinyamitende gusa bemerewe kunyuranaho barenze umurongo wera udacagaguye' }],
    correctAnswer: 'b',
    hasImage: true
  },

  // ===== MISSING QUESTIONS: PRACTICAL / TRAFFIC (recovered from PDF) =====
  {
    id: 212, category: 'practical',
    question: "Mu gihe telefone yawe ihamagawe utwaye imodoka wakora iki? (ibibazo 2)",
    options: [{ label: 'a', text: 'Kwitaba cyangwa guhagarara ako kanya' }, { label: 'b', text: 'Kutayitaba' }, { label: 'c', text: 'Gushyira imodoka iruhande ukayitaba' }, { label: 'd', text: 'B na c ni ibisubizo byukuri' }],
    correctAnswer: 'c'
  },
  {
    id: 273, category: 'practical',
    question: "Urenze munsisiro, ukahasanga ibyapa bibiri iburyo bwawe bimenyesha ko irangira ry'imirimo bitewe nicyo ibyo byapa bemenyesha. Wagendera kuwuhe muvuduko?",
    options: [{ label: 'a', text: '70 km/h' }, { label: 'b', text: '50 km/h' }, { label: 'c', text: '40 km/h' }, { label: 'd', text: '80 km/h' }],
    correctAnswer: 'd',
    hasImage: true
  },
  {
    id: 310, category: 'practical',
    question: "Muri ibi binyabiziga n'ikihe gihagaze nabi?",
    options: [{ label: 'a', text: 'Ibinyabiziga byombi' }, { label: 'b', text: 'Ikinyabiziga cy\'icyatsi' }, { label: 'c', text: 'Ikinyabiziga cy\'umutuku' }, { label: 'd', text: 'Nta n\'imwe' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 311, category: 'practical',
    question: "Ni gute umuyobozi w'ikinyabiziga yanyura kumunyegare hano?",
    options: [{ label: 'a', text: 'Aha umuyobozi w\'ikinyabiziga ntashobora kumunyuraho' }, { label: 'b', text: 'Atarenze umurongo wera ucagaguye' }, { label: 'c', text: 'Arenze umurongo wera ucagaguye' }, { label: 'd', text: 'Nta kurenga iyi mirongo yombi' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 314, category: 'practical',
    question: "Niki umuyobozi w'ikinyabiziga akwiriye kumenya mugihe akurikiye umuyobozi wikinyamitende ibiri kandi imodoka y'umweru iri gusubira inyuma ijya mumuhanda?",
    options: [{ label: 'a', text: 'Umuyobozi wikinyabiziga gisubira inyuma azahagarara nabona umuyobozi w\'ikinyamitende ibiri' }, { label: 'b', text: 'Umuyobozi w\'ikinyamitende ibiri ashobora gusaba umuyobozi w\'ikinyabiziga gisubira inyuma guhagarara' }, { label: 'c', text: 'Amatara yoguhagarara ashobora kuzima ikinyabiziga gikomeza gusubira inyuma' }, { label: 'd', text: 'Umuyobozi w\'ikinyamitende ashobora guhagarara bitunguranye' }],
    correctAnswer: 'd',
    hasImage: true
  },
  {
    id: 315, category: 'practical',
    question: "Aha niki umuyobozi w'ikinyabiziga yakora mugihe ashaka kujya iburyo?",
    options: [{ label: 'a', text: 'Gukomeza hagati y\'abanyamaguru babiri' }, { label: 'b', text: 'Kuvuza ihoni akongera umuvuduko' }, { label: 'c', text: 'Guhagarara akareka abanyamaguru bakambuka' }, { label: 'd', text: 'Reka umunyamaguru umwe atambuke ubone umwanya wogutambuka' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 316, category: 'practical',
    question: "Aha umuyobozi w'ikinyabiziga ashobora kunyura kuri aba abanyamagare?",
    options: [{ label: 'a', text: 'Oya, umuyobozi ntashobora kureba imbere neza' }, { label: 'b', text: 'Yego, kuko umurongo wera ucagaguye udashobora kuba udacagaguye' }, { label: 'c', text: 'Yego, abanyamagare bazumva imodoka bave munzira' }, { label: 'd', text: 'Yego, kuko buri kinyabiziga kiva mukindi cyerekezo gishobora kuguha inzira' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 317, category: 'practical',
    question: "Aha niki umuyobozi w'ikinyabiziga yakora?",
    options: [{ label: 'a', text: 'Kwemerera abanyamaguru kwambuka umuhanda' }, { label: 'b', text: 'Kuvuza ihoni agakomeza' }, { label: 'c', text: 'Tengereza munzira y\'abanyamaguru kugeza imidoka izimye' }, { label: 'd', text: 'Kongera umuvuduko mbere yuko abanyamaguru bambuka' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 318, category: 'practical',
    question: "Muri ibi binyabiziga bine ni ikihe kiri mu buryo bwiza bwo gukata ikoni ry'iburyo kiva mu muhanda munini kijya mu muto?",
    options: [{ label: 'a', text: 'Ikinyabiziga cya mbere kiri mu buryo bwiza bwo gukata ikoni ry\'iburyo' }, { label: 'b', text: 'Ikinyabiziga cya kabiri kiri mu buryo bwiza bwo gukata ikoni ry\'iburyo' }, { label: 'c', text: 'Ikinyabiziga cya gatatu kiri mu buryo bwiza bwo gukata ikoni ry\'iburyo' }, { label: 'd', text: 'Ikinyabiziga cya kane kiri mu buryo bwiza bwo gukata ikoni ry\'iburyo' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 324, category: 'traffic',
    question: "Umurongo w'umweru urombereje uciye hagati mu muhanda uvuze iki?",
    options: [{ label: 'a', text: 'Umuyobozi wese abujijwe kuwurenga' }, { label: 'b', text: 'Abanyamitende wemerewe kunyuranaho' }, { label: 'c', text: 'Kuhahagara biremewe' }, { label: 'd', text: 'Guhindukira ku manywa' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 325, category: 'practical',
    question: "Umuyobozi w'ikinyabiziga ugeze mu isangano ry'umuhanda ugenzurwa ni ibimenyetso by'amatara yaka agasanga ataka (adakora), yakora iki?",
    options: [{ label: 'a', text: 'Guca mu isangano n\'ubwitonzi nkaho ntakimenyetso kikuyobora kirimo, witondera abandi bayobozi b\'ibinyabiziga' }, { label: 'b', text: 'Gutwara neza ntagutinda mw\'isangano' }, { label: 'c', text: 'Guhagarara mw\'isangano no guha inzira abayobozi b\'ibinyabiziga baturuka iburyo bwawe' }, { label: 'd', text: 'Gucana amatara yose ndanga cyerekezo ugakomeza' }],
    correctAnswer: 'a'
  },
  {
    id: 326, category: 'practical',
    question: "Ni iki umuyobozi w'ikinyabiziga yakora ahuye n'ishyo ry'amatungo munzira nyabagendwa?",
    options: [{ label: 'a', text: 'Kuvuza ihoni kugirango ayo matungo atambuke' }, { label: 'b', text: 'Umuyobozi w\'ikinyabiziga agomba kugabanya umuvuduko no gutambukana ubwitonzi' }, { label: 'c', text: 'Kwatsa amatara maremare n\'amagufi no gutambuka vuba bishoboka' }, { label: 'd', text: 'Kuvuza ihoni no gutambukana ubwitonzi' }],
    correctAnswer: 'b'
  },
  {
    id: 327, category: 'practical',
    question: "Umuyobozi w'ikinyabiziga yakora iki igihe ageze ku kazamuko gashinze cyane?",
    options: [{ label: 'a', text: 'Umuyobozi w\'ikinyabiziga agomba kugabanya umuvuduko akaguma kuruhande rw\'iburyo yirinda ibyago' }, { label: 'b', text: 'Gukandagira ikirenge cya amburiyage no kuvuza ihoni ryo kumunyesha' }, { label: 'c', text: 'Kugumana umuvuduko n\'ikirekezo wari ufite mu muhanda' }, { label: 'd', text: 'Guhagarara ku mpera zuwo musozi' }],
    correctAnswer: 'a'
  },
  {
    id: 328, category: 'practical',
    question: "Umuyobozi w'ikinyabiziga yakora iki ahuye n'ikinyabiziga giturutse mukindi kerekezo, gicanye amatara yumuhondo aburira?",
    options: [{ label: 'a', text: 'Umuyobozi w\'ikinyabiziga agomba kugabanya umuvuduko no gutambukana ubwitonzi' }, { label: 'b', text: 'Ikinyabiziga cy\'ubutabazi' }, { label: 'c', text: 'Yagize ibyago' }, { label: 'd', text: 'Umuvudoko urenze' }],
    correctAnswer: 'a'
  },
  {
    id: 329, category: 'practical',
    question: "Niki umuyobozi w'ikinyabiziga yakora ageze hafi y'inzira ifunganye igihe ahuye n'ikindi kinyabiziga giturutse mukindi cyerekezo?",
    options: [{ label: 'a', text: 'Agomba kuguma mumwanya yarimo agategereza gutambuka kwikindi kinyabiziga' }, { label: 'b', text: 'Kugabanya umuvuduko no gusiga umwanya uhagije hagati y\'ibinyabiziga byombi' }, { label: 'c', text: 'Gutegereza ko undi muyobozi w\'ikinyabiziga ava mu muhanda' }, { label: 'd', text: 'Gutwarira ikinyabiziga mu muhanda hagati kugirango abandi bayobozi bahagararare' }],
    correctAnswer: 'b'
  },
  {
    id: 330, category: 'practical',
    question: "Umuyobozi w'ikinyabiziga agendera inyuma y'ikindi kinyabizaga akaba adateganya kukinyuraho yakora iki?",
    options: [{ label: 'a', text: 'Kuguma yicyo kinyabiziga hagati mu muhanda' }, { label: 'b', text: 'Kuguma inyuma yacyo kugirango yemerere ibindi binyabiziga gutambuka' }, { label: 'c', text: 'Gutwarira inyuma ye umwegereye cyane kugirango ureke ibindi binyabiziga bibanyureho' }, { label: 'd', text: 'Gutanga ibimenyetso kubindi binyabiziga ko byabanyuraho' }],
    correctAnswer: 'b'
  },
  {
    id: 331, category: 'practical',
    question: "Niryari amatara ndanga cyerekezo agomba kugaragazwa kubandi bakoresha umuhanda?",
    options: [{ label: 'a', text: 'Igihe gusa ari ngombwa amenyesha ibindi binyabiziga bimukurikiye' }, { label: 'b', text: 'Igihe gusa aringombwa kuburira abandi bayobozi bava mukindi cyerekezo' }, { label: 'c', text: 'Mugihe gikwiye ushaka kumenyesha abandi bakoresha umuhanda icyo ugiye gukora' }, { label: 'd', text: 'Keretse ahari ibimenyetso byo mu muhanda byerekana icyerekezo cyawe' }],
    correctAnswer: 'c'
  },
  {
    id: 332, category: 'practical',
    question: "Gutinda gutanga ibimenyetso ku muyobozi w'ikinyabiziga ni gute bibangamira abandi bakoresha umuhanda?",
    options: [{ label: 'a', text: 'Bigira ingaruka gusa kubaturuka mukindi cyerekezo' }, { label: 'b', text: 'Bishobora gutuma batabona igihe gihagije cyo gushyira mubikorwa icyo amenyeshejwe' }, { label: 'c', text: 'Baba bafite igihe gihagije cyo gushyira mu bikorwa ibyo bamyeshejwe' }, { label: 'd', text: 'Ntacy bibabangamiraho' }],
    correctAnswer: 'b'
  },
  {
    id: 334, category: 'practical',
    question: "Niki umuyobozi w'ikinyabiziga yakora igihe agize uruhare mu mpanuka yo mu muhanda, aho ntawakometese ariko ibinyabiziga bikaba byateza icyago cyangwa byafunze umuhanda?",
    options: [{ label: 'a', text: 'Gushushanya aho zagonganiye no kuzishyira kuruhande' }, { label: 'b', text: 'Gukuramo abagenze ugashyiraho icyapa cya mpandeshatu girukura kumodoka' }, { label: 'c', text: 'Gutegereza ko abapolisi bahagera mbere yo gukura ibinyabiziga mu muhanda' }, { label: 'd', text: 'Guhagarika ibindi binyabiziga kugeza ikibazo gikemutse mukabona kubikura mu muhanda' }],
    correctAnswer: 'a'
  },
  {
    id: 335, category: 'practical',
    question: "Igihe umuyobozi w'ikinyabiziga agendera munzira y'icyerekezo kimwe akifuza gukata ibumoso yakora iki?",
    options: [{ label: 'a', text: 'Gutwara yegera umurongo wo hagati mu muhanda yerekeza ibumoso' }, { label: 'b', text: 'Gutwara yegera uruhande rw\'iburyo bw\'umuhanda' }, { label: 'c', text: 'Gutwara yegera ku uruhande rw\'ibumoso bw\'umuhanda' }, { label: 'd', text: 'Gutwarira hafi y\'umurongo ugabanya umuhanda mo kabili' }],
    correctAnswer: 'a'
  },
  {
    id: 336, category: 'practical',
    question: "Umuyobozi w'ikinyabizaga uri kugendera mu muhanda w'ibyerekezo bibiri nuruhe ruhande rw'umuhanda agomba gukoresha?",
    options: [{ label: 'a', text: 'Uruhande rw\'ibumoso bw\'umuhanda uretse igihe atawaye imashini zihinga cyangwa zikoreshwa indi mirimo' }, { label: 'b', text: 'Mu gice cy\'umuhanda yumva ashaka' }, { label: 'c', text: 'Mu gice cy\'iburyo bw\'umuhanda uretse igihe ashaka kunyuranaho cyangwa gukata ibumoso' }, { label: 'd', text: 'Ku ruhande rw\'ibumoso bw\'umuhanda' }],
    correctAnswer: 'c'
  },
  {
    id: 337, category: 'practical',
    question: "Igihe umuyobozi w'ikinyabiziga atwaye mu muhanda urombereje w'ibice byinshi agomba kugendera mu kihe gice cy'umuhanda?",
    options: [{ label: 'a', text: 'Kugendera mugice icyo aricyo cyose kirimo ibinyabiziga bike' }, { label: 'b', text: 'Kugendera kugice cy\'ibumoso keretse ushaka gusohokera iburyo' }, { label: 'c', text: 'Kugendera mu gice cy\'iburyo bw\'umuhanda keretse ushaka kunyuranaho' }, { label: 'd', text: 'Ntagutwarira mu ruhande rw\'iburyo bw\'umuhanda kuko hagenewe imodoka ziremereye' }],
    correctAnswer: 'c'
  },
  {
    id: 338, category: 'practical',
    question: "Umuyobozi w'ikinyabiziga yakora iki igihe ageze aho banyura bazenguruka?",
    options: [{ label: 'a', text: 'Tanga inzira ku binyabiziga byamaze kwinjira aho banyura bazunguruka' }, { label: 'b', text: 'Tanga inzira kubinyabiziga biremereye gusa' }, { label: 'c', text: 'Tanga inzira gusa niba uri munzira ya kabiri niya gatatu isohoka' }, { label: 'd', text: 'Komeza kuko abandi bayobozi b\'ibinyabiziga bagomba kuguha inzira yo gukomeza' }],
    correctAnswer: 'a'
  },
  {
    id: 339, category: 'traffic',
    question: "Ni kihe cyerekezo umuyobozi w'ikinyabiziga yinjiriramo iyo ageze aho banyura bazenguruka?",
    options: [{ label: 'a', text: 'Ibumoso' }, { label: 'b', text: 'Ibumoso gusa igihe ayobowe ni kimenyetso kimurika' }, { label: 'c', text: 'Iburyo cyangwa ibumoso' }, { label: 'd', text: 'Iburyo' }],
    correctAnswer: 'd'
  },
  {
    id: 340, category: 'practical',
    question: "Mbere yuko umuyobozi w'ikinyabiziga akata ibumoso mu nzira nyabagendwa, nihe ikinyabiziga kigomba kuba kiri?",
    options: [{ label: 'a', text: 'Mu ruhande rw\'iburyo bw\'inzira nyabagendwa' }, { label: 'b', text: 'Gusa iburyo bwo hagati y\'inzira nyabagendwa' }, { label: 'c', text: 'Muruhande urwarirwo rwo hagati mu nzira nyabagendwa' }, { label: 'd', text: 'Mu ruhande rw\'ibumoso bw\'inzira nyabagendwa' }],
    correctAnswer: 'd',
    hasImage: true
  },
  {
    id: 341, category: 'practical',
    question: "Umuyobozi w'ikinyabiziga yakwitondera iki mbere yuko y'injira munzira banyuramo bazeñgurutse?",
    options: [{ label: 'a', text: 'Ibinyabiziga bimuturuka inyuma umuvuduko bifite n\'uburyo bimwegereye' }, { label: 'b', text: 'Ibinyabiziga biturutse ibumoso bwe n\'umuvuduko bifite n\'intera iri hagati ye nabyo' }, { label: 'c', text: 'Ibinyabiziga biturutse iburyo n\'umuvuduko bifite ni intera iri hagati ye nabyo' }, { label: 'd', text: 'Ibinyabiziga bimututse imbere, umuvuduko bifite n\'intera iri hagati ye nabyo' }],
    correctAnswer: 'b'
  },
  {
    id: 342, category: 'practical',
    question: "Umuyobozi w'ikinyabiziga ugendera inyuma y'ikinyabaziga gitwara abagenzi gihagaze gikuramo cyangwa gishyiramo abagenzi agomba:",
    options: [{ label: 'a', text: 'Kunyuranaho ibumoso' }, { label: 'b', text: 'Gutegereza yihanganye' }, { label: 'c', text: 'A na B ni ibisubizo by\'ukuri' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b'
  },
  {
    id: 343, category: 'practical',
    question: "Igihe ubonye icyapa kigaragaza ishuli wakora iki?",
    options: [{ label: 'a', text: 'Kugabanya umuvuduko no gukomeza witonze' }, { label: 'b', text: 'Gukomeza n\'umuvuduko uri hejuru kuko umunyeshuli agomba gutegereza' }, { label: 'c', text: 'Kuvuza ihoni' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'a'
  },
  {
    id: 344, category: 'practical',
    question: "Umubare w'abagenzi bemewe gutwarwa mukinyabiziga wanditswe mu:",
    options: [{ label: 'a', text: 'Icyemezo cy\'iyandikwa ry\'ikinyabiziga' }, { label: 'b', text: 'Inyemezabwishyu y\'umusoro' }, { label: 'c', text: 'Ubwishingizi' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'd'
  },
  {
    id: 346, category: 'practical',
    question: "Umuyobozi w'ikinyabizaga ashobora kunyuranaho:",
    options: [{ label: 'a', text: 'Ahamanuka' }, { label: 'b', text: 'Igihe umuhanda ari mugari' }, { label: 'c', text: 'Igihe umuyobozi w\'ikinyabiziga kiri imbere ye amweretse ikimenyetso kimwemerera kunyuranaho' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri' }],
    correctAnswer: 'c'
  },

  // ===== MISSING ROAD SIGN QUESTIONS (recovered from PDF) =====
  {
    id: 224, category: 'signs',
    question: "Uri hafi kunyura k'umuyobozi w'ikinyamitende. Muri ibi byapa bikurikira nikihe wakwitondera?",
    options: [{ label: 'a', text: 'Icyapa a)' }, { label: 'b', text: 'Icyapa b)' }, { label: 'c', text: 'Icyapa c)' }, { label: 'd', text: 'Icyapa d)' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 229, category: 'signs',
    question: "Iki cyapa cyivuga iki?",
    options: [{ label: 'a', text: 'Umuvuduko ntarengwa 30 km/h' }, { label: 'b', text: 'Iherezo ry\'umuvuduko muke ntarengwa utegetswe' }, { label: 'c', text: 'Umuvuduko uri hejuru 30 km/h' }, { label: 'd', text: 'Iherezo ry\'Umuvuduko muto utegetswe' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 230, category: 'signs',
    question: "Icyapa gikurikira kivuze iki?",
    options: [{ label: 'a', text: 'Ntihanyurwa' }, { label: 'b', text: 'Birabujijwe guhagarara umwanya munini' }, { label: 'c', text: 'Umuvuduko utarengeje' }, { label: 'd', text: 'Inzira yabanyeshuli' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 234, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Iherezo ry\'ibibuzwa byose mu karere ku binyabiziga bigenda' }, { label: 'b', text: 'Ntihemerewe kuhahagarara' }, { label: 'c', text: 'Umuvuduko ntarengwa wemewe' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 235, category: 'signs',
    question: "Ibyapa bitegeka bikozwe muyihe shusho?",
    options: [{ label: 'a', text: 'Ishusho a)' }, { label: 'b', text: 'Ishusho b)' }, { label: 'c', text: 'Ishusho c)' }, { label: 'd', text: 'Ishusho d)' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 236, category: 'signs',
    question: "Nikihe cyapa cyerekena ko nta kinyabiziga gifite moteri cyemerewe kuhanyura?",
    options: [{ label: 'a', text: 'Icyapa a)' }, { label: 'b', text: 'Icyapa b)' }, { label: 'c', text: 'Icyapa c)' }, { label: 'd', text: 'Icyapa d)' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 237, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Uburenganzira bwo gutambuka mbere' }, { label: 'b', text: 'Nta kinyabiziga kigendeshwa na moteri' }, { label: 'c', text: 'Ibyerekezo bibiri by\'umuhanda' }, { label: 'd', text: 'Birabujijwe kunyuranaho' }],
    correctAnswer: 'd',
    hasImage: true
  },
  {
    id: 238, category: 'signs',
    question: "Imbere yawe iki cyapa kikubwiye iki?",
    options: [{ label: 'a', text: 'Umuvuduko ntarengwa wemewe' }, { label: 'b', text: 'Iherezo ry\'ibyo wabuzwaga' }, { label: 'c', text: 'Guhagarara umwanya munini n\'umwanya moto ntibyemewe' }, { label: 'd', text: 'Birabujijwe kuhinjira' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 239, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Umuhanda uzenguruka' }, { label: 'b', text: 'Igice cy\'umuhanda uzenguruka' }, { label: 'c', text: 'Aho banyura bazengurutse' }, { label: 'd', text: 'Ibisubizo byose nibyo' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 240, category: 'signs',
    question: "Iki cyapa gisubanura iki?",
    options: [{ label: 'a', text: 'Iteme ridahoraho' }, { label: 'b', text: 'Umuhanda utaringaniye' }, { label: 'c', text: 'Umuhanda w\'injira mu kuzimu' }, { label: 'd', text: 'Ubutaka bworoshye' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 241, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Umuyaga w\'intambike' }, { label: 'b', text: 'Urusaku rwo mu muhanda' }, { label: 'c', text: 'Ikibuga cy\'indege' }, { label: 'd', text: 'Ibisubizko byose nibyo' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 242, category: 'signs',
    question: "Iki Cyapa Gisobanura Iki?",
    options: [{ label: 'a', text: 'Iherezo Ry\'inzira Y\'abanyamaguru' }, { label: 'b', text: 'Iherezo Ry\'umuhanda Urombereje W\'ibice Byinshi' }, { label: 'c', text: 'A Na B Ni Ibisubizo By\'ukuri' }, { label: 'd', text: 'Nta nzira ihari' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 243, category: 'signs',
    question: "Iki cyapa gisobanura Iki?",
    options: [{ label: 'a', text: 'Iherezo Ry\'umuhanda Wi Byerekezo Bibiri' }, { label: 'b', text: 'Iteme rinini Kandi rirerire' }, { label: 'c', text: 'Ifungana Ry\'umuhanda' }, { label: 'd', text: 'Iherezo ry\'iteme rifunganye' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 244, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Isangano rifite ishusho ya T' }, { label: 'b', text: 'Inzira idakomeza' }, { label: 'c', text: 'Aho baterefonera' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 245, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Inzira y\'abanyeshuri' }, { label: 'b', text: 'Abanyamaguru ntibemerewe' }, { label: 'c', text: 'Agace k\'abanyamaguru nta kinyabiziga' }, { label: 'd', text: 'Hegereye aho abanyamaguru bambukira' }],
    correctAnswer: 'd',
    hasImage: true
  },
  {
    id: 246, category: 'signs',
    question: "Wakora iki ubonye icyi cyapa?",
    options: [{ label: 'a', text: 'Guhagarara gusa igihe ibinyabiziga bikwegereye' }, { label: 'b', text: 'Guhagarara niyo nta kinyabiziga ubona' }, { label: 'c', text: 'Guhagarara gusa niba hari abana bategereje kwambuka' }, { label: 'd', text: 'Guhagarara gusa igihe ikimenyetso cyaka ari umutuku' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 247, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Uguhinguka ku mwaro cyangwa ku nkombe cyangwa ahegereye icyome' }, { label: 'b', text: 'Inzira nyabagendwa iri kumusozi ucuramye' }, { label: 'c', text: 'Umuhanda utaringaniye' }, { label: 'd', text: 'Umuhanda wangijwe n\'isuri' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 248, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Hanyurwa na velomoteri gusa' }, { label: 'b', text: 'Nta modoka' }, { label: 'c', text: 'Hanyurwa nimodoka gusa' }, { label: 'd', text: 'Ntihanyurwa n\'amapikipiki' }],
    correctAnswer: 'd',
    hasImage: true
  },
  {
    id: 249, category: 'signs',
    question: "Icyapa gitanga uburenganzira bwo gutambuka mbere kigira iyihe shusho?",
    options: [{ label: 'a', text: 'Ishusho a)' }, { label: 'b', text: 'Ishusho b)' }, { label: 'c', text: 'Ishusho c)' }, { label: 'd', text: 'Ishusho d)' }],
    correctAnswer: 'd',
    hasImage: true
  },
  {
    id: 250, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Ahegereye amasangano y\'inzira nyabagendwa n\'inzira ya gari ya moshi ibambiye' }, { label: 'b', text: 'Inzira ibambiye imbere' }, { label: 'c', text: 'Inzira itabambiye itanafunze' }, { label: 'd', text: 'Imbere hari ikiraro cy\'amatungo' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 251, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Umuhanda wubatswe nabi' }, { label: 'b', text: 'Agacuri kateza ibyago' }, { label: 'c', text: 'Umuhanda utaringaniye' }, { label: 'd', text: 'Akazamuko gahanamye' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 252, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Guhindura icyerekezo ibumoso ugana aho bahagarara' }, { label: 'b', text: 'Umuhanda udakomeza' }, { label: 'c', text: 'Nti byemewe guhindura icyerekezo ibumoso' }, { label: 'd', text: 'Guhindura ikirekezo ibumoso ugana ku cyome' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 257, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Ukugendera mu muhanda ubisikanirwamo' }, { label: 'b', text: 'Ukugendera mu muhanda ubisikanirwamo ntibyemewe' }, { label: 'c', text: 'Cyerekana aho umunyegare agomba kunyura' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 258, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Ahatangirwa serivisi ni muri metero 30' }, { label: 'b', text: 'Umuvuduko munini ntarengwa utegetswe ni 30 km/h' }, { label: 'c', text: 'Umuvuduko muto ntarengwa utegetswe ni 30 km/h' }, { label: 'd', text: 'Aho ibinyabiziga bihagarara ni imbere mu birometero 30' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 259, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Ahegereye umuhanda unyerera' }, { label: 'b', text: 'Imbere ipine ryapfumutse' }, { label: 'c', text: 'Ahegereye icyago kidasobanuye ukundi' }, { label: 'd', text: 'Imbere hari hatangirwa serivisi' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 260, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Imbere hari umuyobozi w\'amatungo' }, { label: 'b', text: 'Imbere hari inzira ya gari ya moshi' }, { label: 'c', text: 'Ahegereye amasangano y\'inzira nyabagendwa n\'inzira ya gari ya moshi hatabambiye' }, { label: 'd', text: 'Inkomane ibambiye' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 266, category: 'signs',
    question: "Umuyobozi w'ikinyabaga cy'ikoreye ibintu bishobora gufata inkongi, n'ikihe cyapa cyerekana ko ibyo atwaye biturika by'afata inkongi?",
    options: [{ label: 'a', text: 'Icyapa a)' }, { label: 'b', text: 'Icyapa b)' }, { label: 'c', text: 'Icyapa c)' }, { label: 'd', text: 'Icyapa d)' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 271, category: 'signs',
    question: "Iki cyapa gisobanura:",
    options: [{ label: 'a', text: 'Uburenganzira bwo gutambuka mbere' }, { label: 'b', text: 'Uburenganzira bwo gutambuka mbere mu yandi masangano y\'umuhanda akwegereye' }, { label: 'c', text: 'Ibyago imbere mu masangano y\'umuhanda ukwegereye' }, { label: 'd', text: 'A na B ni ibisubizo by\'ukuri' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 272, category: 'signs',
    question: "Iki cyapa gisobanura:",
    options: [{ label: 'a', text: 'Ntihanyurwa n\'abanyamaguru' }, { label: 'b', text: 'Akayira kabanyamaguru' }, { label: 'c', text: 'Aho abanayamaguru bambukira' }, { label: 'd', text: 'B na c ni ibisubizo by\'ukuri' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 274, category: 'signs',
    question: "Iki cyapa gisobanura iki?",
    options: [{ label: 'a', text: 'Hoteli' }, { label: 'b', text: 'Ibitaro' }, { label: 'c', text: 'Ahagenewe kugwa kajugujugu' }, { label: 'd', text: 'B na c ni ibisubizo by\'ukuri' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 275, category: 'signs',
    question: "Igice kinzira nyabagendwa gikikijwe n'imirongo ibiri y'umweru iciyemo uduce kandi iteganye gisobanura iki?",
    options: [{ label: 'a', text: 'Ahagenewe guhagarara umwanya munini n\'umuto' }, { label: 'b', text: 'Ahagenewe abanayamaguru' }, { label: 'c', text: 'Ahagenewe inzira y\'ibinyamitende' }, { label: 'd', text: 'A na B ni ibisubizo by\'ukuri' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 276, category: 'signs',
    question: "Iki cyapa kibuza abayobozi bibinyabiziga kunyuranaho:",
    options: [{ label: 'a', text: 'Iburyo' }, { label: 'b', text: 'Ibumoso' }, { label: 'c', text: 'Iburyo n\'ibumoso' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 277, category: 'signs',
    question: "Iki cyapa kibuza kunyuranaho ibumoso ku binyabiziga bikurikira:",
    options: [{ label: 'a', text: 'Ku binyabiziga byose' }, { label: 'b', text: 'Ku binyabiziga byose bifite moteri' }, { label: 'c', text: 'Kubinyabiziga byose uretse ibinyamitende ibiri n\'amapikipiki adafite akanyabiziga ko k\'uruhande' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 278, category: 'signs',
    question: "Iki kimenyetso cyaka kinyemerera gukomeza:",
    options: [{ label: 'a', text: 'Yego' }, { label: 'b', text: 'Yego ariko utanga inzira kubanyamaguru' }, { label: 'c', text: 'Yego utanga inzira kubandi bayobozi b\'ibinyabizaga baturutse mukindi cyerekezo' }, { label: 'd', text: 'Oya' }],
    correctAnswer: 'd',
    hasImage: true
  },
  {
    id: 280, category: 'signs',
    question: "Ni ikihe cyapa muri ibi kintegeka gutanga inzira:",
    options: [{ label: 'a', text: 'Icyapa A19' }, { label: 'b', text: 'Icyapa B5' }, { label: 'c', text: 'Icyapa B6' }, { label: 'd', text: 'Ntagisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 281, category: 'signs',
    question: "Iki cyapa gisobanura:",
    options: [{ label: 'a', text: 'Utubuye dutaruka mu muhanda' }, { label: 'b', text: 'Umuhanda urimo amazi' }, { label: 'c', text: 'Umuhanda unyerera' }, { label: 'd', text: 'A na B ni bisubizo by\'ukuri' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 283, category: 'signs',
    question: "Ni ikihe cyapa cy'inyemerera gutambuka mbere mu masangano y'umuhanda?",
    options: [{ label: 'a', text: 'Icyapa B3' }, { label: 'b', text: 'Icyapa A22a' }, { label: 'c', text: 'Icyapa A20' }, { label: 'd', text: 'Ibisubizo byose ni ukuri' }],
    correctAnswer: 'a',
    hasImage: true,
    signCode: 'B3'
  },
  {
    id: 388, category: 'signs',
    question: "Ibi byapa byo mu muhanda birambuza kunyuranaho ibumoso?",
    options: [{ label: 'a', text: 'Yego' }, { label: 'b', text: 'Yego, iyo ufite umuvuduo wa 90km/h' }, { label: 'c', text: 'Oya' }, { label: 'd', text: 'Ntagisubizo cy\'ukuri' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 390, category: 'practical',
    question: "Umuhanda urombereje w'ibice byinshi. Ndashaka kunyura kuri izi kamyo ibyiri mugihe gito ibumoso icyarimwe, biremewe?",
    options: [{ label: 'a', text: 'Yego' }, { label: 'b', text: 'Oya' }, { label: 'c', text: 'Yego bikorewe ibumoso' }, { label: 'd', text: 'Ntagisubizo cy\'ukuri' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 391, category: 'signs',
    question: "K'umuyobozi w'ivatiri, iki cyapa kivuze iki?",
    options: [{ label: 'a', text: 'Kirambuza gutwara ku muvuduko utarengeje 5km/h' }, { label: 'b', text: 'Ntaburenganzira kimpa, mugihe gikurikizwa ku binyabiziga bifite hejuru y\'atoni 5' }, { label: 'c', text: 'Ntacyo bindebaho mugihe bireba gusa zipima tone 5 no kurengaho' }, { label: 'd', text: 'Ntagisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 392, category: 'practical',
    question: "Ndashaka gukata iburyo. Biremewe?",
    options: [{ label: 'a', text: 'Yego' }, { label: 'b', text: 'Yego, ariko nyuma yo guhagarara' }, { label: 'c', text: 'Ntabwo byemewe' }, { label: 'd', text: 'Ntagisubizo cyukuri kirimo' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 393, category: 'practical',
    question: "Umuhanda wambukiranya inzira ya gariyamoshi:",
    options: [{ label: 'a', text: 'Nshobora gukomeza nkambuka umuhanda kubera ko uruzitiro rufunguye' }, { label: 'b', text: 'Ngomba guhagarara munsi yitara ry\'umutuku rimyatsa' }, { label: 'c', text: 'Ntabwo nakomeza urugendo rwanjye. Ngomba gihita mpagarara' }, { label: 'd', text: 'Ntagisubizo cy\'ukuri' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 396, category: 'signs',
    question: "Ngomba:",
    options: [{ label: 'a', text: 'Guhagarara igihe gito kuri icyi cyapa cy\'umuhanda' }, { label: 'b', text: 'Guhagarara ngatanga inzira kuri metero 100 ntaragera kuri icyi cyapa' }, { label: 'c', text: 'Gutanga inzira nkanahagarara iyo ari ngombwa muri m100 ntaragera kuri icyi cyapa' }, { label: 'd', text: 'Ntagisubizo cy\'ukuri' }],
    correctAnswer: 'b',
    hasImage: true
  },
  {
    id: 398, category: 'signs',
    question: "Mfite uburenganzira bwo gutambuka muri iri sangano?",
    options: [{ label: 'a', text: 'Yego, niba ukata ibumoso' }, { label: 'b', text: 'Oya niba ukata iburyo' }, { label: 'c', text: 'Yego, bitewe noho ngana' }, { label: 'd', text: 'Ntagisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'c',
    hasImage: true
  },
  {
    id: 399, category: 'signs',
    question: "Ndi kumuvuduko wa 20km/h. Nshobora gukomeza muri iri sangano ry'umuhanda?",
    options: [{ label: 'a', text: 'Oya' }, { label: 'b', text: 'Yego, nshobora gukata iburyo' }, { label: 'c', text: 'Yego, nshobora gukata ibumoso cyangwa iburyo' }, { label: 'd', text: 'Yego, nshobora gukata ibumoso gusa' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 401, category: 'signs',
    question: "Uhereye kuri ibi byapa habujijwe:",
    options: [{ label: 'a', text: 'Kunyuranaho kubinyabiziga bikururwa nibinyabiziga birengeje imitende ibiri ibumoso no kugendera kumuvuduko urengeje 70 km/h' }, { label: 'b', text: 'Kunyuranaho kubinyabiziga bikururwa cyangwa ibinyabiziga birengeje imitende ibiri ibumoso' }, { label: 'c', text: 'Kugendera hejuru ya 70 km/h' }, { label: 'd', text: 'Ntagisubizo cy\'ukuri' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 402, category: 'signs',
    question: "Ndashaka gupariki ikinyabiga iburyo kunzira y'abanyamaguru:",
    options: [{ label: 'a', text: 'Biremewe munsi yicyi cyapa' }, { label: 'b', text: 'Biremewe imbere y\'icyi cyapa' }, { label: 'c', text: 'Birabujijwe imbere n\'inyuma yicyi cyapa' }, { label: 'd', text: 'Nta gisubizo cy\'ukuri kirimo' }],
    correctAnswer: 'a',
    hasImage: true
  },
  {
    id: 422, category: 'signs',
    question: "Mu byapa bikurikira, ni ikihe cyerekana umuhanda udakomeza:",
    options: [{ label: 'a', text: 'Icyapa C1' }, { label: 'b', text: 'Icyapa E14' }, { label: 'c', text: 'Icyapa C2a' }, { label: 'd', text: 'Icyapa B2a' }],
    correctAnswer: 'b',
    hasImage: true,
    signCode: 'E14'
  },
  {
    id: 424, category: 'signs',
    question: "Muri ibi byapa bikurikira ni ikihe cyerekana ko umuyobozi ukibonye yemerewe gutambuka mbere y'abaturutse aho agana mu nzira ifunganye:",
    options: [{ label: 'a', text: 'Icyapa B6' }, { label: 'b', text: 'Icyapa A19' }, { label: 'c', text: 'Icyapa B3' }, { label: 'd', text: 'Icyapa A22a' }],
    correctAnswer: 'a',
    hasImage: true,
    signCode: 'B6'
  },
  {
    id: 427, category: 'signs',
    question: "Ni ikihe icyapa gisobanura umuhanda w'icyerekezo kimwe:",
    options: [{ label: 'a', text: 'Icyapa D1a' }, { label: 'b', text: 'Icyapa E13a' }, { label: 'c', text: 'Icyapa C19' }, { label: 'd', text: 'Icyapa C1' }],
    correctAnswer: 'b',
    hasImage: true,
    signCode: 'E13a'
  }
];

export const categories = [
  {
    id: 'vehicle',
    name: 'Vehicle Rules',
    nameKiny: 'Ingingo z\'Ibinyabiziga',
    description: 'Amategeko yerekeye ibinyabiziga: amatara, ubugari, feri, uburemere',
    color: '#00ff88',
    bgColor: 'from-emerald-900 to-green-800',
    icon: '🚗',
    questionCount: questions.filter(q => q.category === 'vehicle').length
  },
  {
    id: 'traffic',
    name: 'Traffic Laws',
    nameKiny: 'Amategeko y\'Umuhanda',
    description: 'Amategeko yo mu muhanda: umuvuduko, guhagarara, kunyuranaho',
    color: '#ff6b35',
    bgColor: 'from-orange-900 to-red-800',
    icon: '🚦',
    questionCount: questions.filter(q => q.category === 'traffic').length
  },
  {
    id: 'practical',
    name: 'Safe Driving',
    nameKiny: 'Ubumenyi bwo Gutwara',
    description: 'Imyifatire myiza mu muhanda: imiterere itandukanye, impanuka',
    color: '#4ecdc4',
    bgColor: 'from-cyan-900 to-teal-800',
    icon: '🧠',
    questionCount: questions.filter(q => q.category === 'practical').length
  },
  {
    id: 'signs',
    name: 'Road Signs',
    nameKiny: 'Ibimenyetso by\'Umuhanda',
    description: 'Ibimenyetso byo mu muhanda: ibyapa, imirongo, amatara bimurika',
    color: '#ffe66d',
    bgColor: 'from-yellow-900 to-amber-800',
    icon: '🪧',
    questionCount: questions.filter(q => q.category === 'signs').length
  }
];

export const getQuestionsByCategory = (categoryId: string) =>
  questions.filter(q => q.category === categoryId);

export const getRandomQuestions = (count: number, categoryId?: string) => {
  const pool = categoryId ? getQuestionsByCategory(categoryId) : questions;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};
