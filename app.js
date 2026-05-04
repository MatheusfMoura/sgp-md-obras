// BANCOS DE DADOS
let bancoDeEstruturas = {};
let bancoDeSaldos = {}; 
let bancoDePara = {}; 
let bancoPrevisto = {}; 
let materiaisConsolidados = {};
let historicoLancamentos = []; 
let listaDeNomesDeEstruturas = []; 
let itemAvulsoSelecionado = null; 

const itensAvulsos = [
    { cod: "37674", desc: "POSTE DT CONCR TIPO B 9M 400DAN", und: "UN", peso: null },
    { cod: "22846", desc: "POSTE DE CONCRETO DT 9/200", und: "UN", peso: null },
    { cod: "620301", desc: "POSTE DE CONCRETO DT 9/400", und: "UN", peso: null },
    { cod: "22792", desc: "POSTE DE CONCRETO DT 10/200", und: "UN", peso: null },
    { cod: "90194", desc: "POSTE DISTR CONCR DT 10M 300DAN 310X420MM 110X140MM CL2", und: "UN", peso: null },
    { cod: "22524", desc: "POSTE;DUPLO T;CONCRETO;10 M;400 DAN;", und: "UN", peso: null },
    { cod: "90195", desc: "POSTE DISTR CONCR DT 10M 600DAN 310X420MM 110X140MM CL2", und: "UN", peso: null },
    { cod: "90198", desc: "POSTE DISTR CONCR DT 11M 300DAN 330X448MM 110X140MM CL2", und: "UN", peso: null },
    { cod: "90199", desc: "POSTE DISTR CONCR DT 11M 600DAN 330X448MM 110X140MM CL2", und: "UN", peso: null },
    { cod: "670148", desc: "POSTE DUP T CONCRETO 11/800 DAN", und: "UN", peso: null },
    { cod: "90203", desc: "POSTE DISTR CONCR DT 12M 600DAN 350X476MM 110X140MM CL2", und: "UN", peso: null },
    { cod: "90200", desc: "POSTE DISTR CONCR DT 12M 1000DAN 380X518MM 140X182MM CL2", und: "UN", peso: null },
    { cod: "91022", desc: "POSTE DIST PRFV BS/CIRC TP/QUAD 2P 11M 300DAN 373MM 168MM", und: "UN", peso: null },
    { cod: "91021", desc: "POSTE DIST PRFV BS/CIRC TP/QUAD 2P 11M 600DAN 383MM 178MM", und: "UN", peso: null },
    { cod: "8390", desc: "TRANSF DIST MONO 7.9KV 3KVA", und: "UN", peso: null },
    { cod: "91026", desc: "TRANSF DISTR AER OMI 1F 7,969KV 240/120V 5KVA CL2 5TP", und: "UN", peso: null },
    { cod: "91616", desc: "TRANSF DISTR ERA OVI 1F 7,96KV 240/120V 10KVA CL2 5TP", und: "UN", peso: null },
    { cod: "91027", desc: "TRANSF DISTR AER OMI 1F 7,969KV 240/120V 10KVA CL2 5TP", und: "UN", peso: null },
    { cod: "91028", desc: "TRANSF DISTR AER OMI 1F 19,919KV 240/120V 10KVA CL2 5TP", und: "UN", peso: null },
    { cod: "91008", desc: "TRANSF DISTR AER OMI 1F / N 7,969KV 240 120V 15KVA CL2", und: "UN", peso: null },
    { cod: "91014", desc: "TRANSF ARE DISTIBUIÇAO OMI 1F 19,919KV 240 120 15KVA CL2 5TP", und: "UN", peso: null },
    { cod: "91007", desc: "TRANSF DISTR AER OMI 1F 7,969KV 240/120V 25KVA CL2 5TP", und: "UN", peso: null },
    { cod: "91015", desc: "TRANSF DISTR AER OMI 1F 19,919KV 240/120V 25KVA CL2 5TP", und: "UN", peso: null },
    { cod: "90053", desc: "TRANSF DISTR AER OMI 3F 13,8KV 220/127V 30KVA CL2 4TP", und: "UN", peso: null },
    { cod: "90081", desc: "TRANS DISTRI ERA OM 3F 34.5KV 220/127V 30 KVA CL2", und: "UN", peso: null },
    { cod: "90054", desc: "TRANSF DISTR AER OMI 3F 13,8KV 220/127V 45KVA CL2 4TP", und: "UN", peso: null },
    { cod: "90082", desc: "TRANS DISTRI ERA OM 3F 34.5KV 220/127V 45KVA CL2", und: "UN", peso: null },
    { cod: "90055", desc: "TRANSF DISTR AER OMI 3F 13,8KV 220/127V 75KVA CL2 4TP", und: "UN", peso: null },
    { cod: "90083", desc: "TRANS DISTRI ERA OM 3F 34.5KV 220/127V 75KVA CL2", und: "UN", peso: null },
    { cod: "90048", desc: "TRANSF DISTR AER OMI 3F 13,8KV 220/127V 112,5KVA CL2 4TP", und: "UN", peso: null },
    { cod: "90078", desc: "TR 112,5 KVA CLASSE 36KV", und: "UN", peso: null },
    { cod: "90049", desc: "TR 150 KVA CLASSE 13,8 KV", und: "UN", peso: null },
    { cod: "90051", desc: "TR 225 KVA CLASSE 13,8 KV", und: "UN", peso: null },
    { cod: "90297", desc: "CABO ALUM CONCENTR 0,6/1KV XLPE 1F 1X16MM2+16MM2", und: "M", peso: null },
    { cod: "90263", desc: "CABO ALUM NU CAA/ASCR 1F 1/0AWG RAVEN", und: "KG", peso: 0.222 },
    { cod: "90258", desc: "CABO ALUM NU 1F CA/AAC 2AWG IRIS", und: "KG", peso: 0.095 },
    { cod: "90262", desc: "CABO ALUM NU CAA/ASCR 1F 2AWG SPARROW", und: "KG", peso: 0.095 },
    { cod: "90560", desc: "CABO ALUM NU CAA/ASCR 1F 4AWG SWAN", und: "KG", peso: 0.087 },
    { cod: "691033", desc: "CABO ALUM NU 1F CA/AAC 2/0AWG ASTER", und: "KG", peso: 0.19 },
    { cod: "500133", desc: "CABO AL NU CA 4/0AWG", und: "KG", peso: 0.303 },
    { cod: "90256", desc: "CORDOALHA ACO CARB CL A 7 FIOS MR 9,5MM 3160DAN", und: "KG", peso: 0.41 },
    { cod: "500091", desc: "CORDOALHA 3X2,25", und: "KG", peso: 0.18 },
    { cod: "9523", desc: "CABO AL PROTEGIDO 50MM2-XLPE", und: "M", peso: null },
    { cod: "90291", desc: "CABO AL PROTEGIDO 70MM2-XLPE", und: "M", peso: null },
    { cod: "90267", desc: "CABO DE ALUM PROTSPL XLPE 1F 15,0KV 120MM", und: "M", peso: null },
    { cod: "90290", desc: "CABO ALUM MULTIPLEX 0,6/1,0KV XLPE 3F 3X1X120MM2+70MM2", und: "M", peso: null },
    { cod: "90268", desc: "CABO AL PROTEGIDO 185MM2-XLPE", und: "M", peso: null },
    { cod: "90286", desc: "CABO QUADRUPLEX 3X1X16+16 MM2", und: "M", peso: null },
    { cod: "90287", desc: "CABO ALUM MULTIPLEX 0,6/1,0KV XLPE 3F 3X1X25MM2+25MM2", und: "M", peso: null },
    { cod: "90288", desc: "CABO ALUM MULTIPLEX 0,6/1,0KV XLPE 3F 3X1X35MM2+35MM2", und: "M", peso: null },
    { cod: "90289", desc: "CABO ALUM MULTIPLEX 0,6/1,0KV XLPE 3F 3X1X70MM2+70MM2", und: "M", peso: null }
].sort((a, b) => a.desc.localeCompare(b.desc)); 

// ==========================================
// CONTROLES DE NAVEGAÇÃO E LAYOUT
// ==========================================
function abrirLevantamento() {
    document.getElementById('tela-menu').classList.add('hidden');
    document.getElementById('tela-levantamento').classList.remove('hidden');
    document.getElementById('tela-levantamento').classList.add('flex');
    mudarAbaDireita('levantamento'); // Força abrir o Catálogo primeiro
}

function voltarMenu() {
    document.getElementById('tela-levantamento').classList.add('hidden');
    document.getElementById('tela-levantamento').classList.remove('flex');
    document.getElementById('tela-menu').classList.remove('hidden');
}

function mudarAbaDireita(aba) {
    const abas = ['levantamento', 'consolidada', 'estruturas', 'acompanhamento'];
    
    abas.forEach(nome => {
        const btn = document.getElementById(`tab-dir-${nome}`);
        const view = document.getElementById(`view-${nome}`);
        if(btn && view) {
            btn.classList.replace('text-orange-500', 'text-slate-500');
            btn.classList.replace('border-orange-500', 'border-transparent');
            btn.classList.remove('bg-cardBg');
            btn.classList.add('hover:text-slate-300', 'hover:bg-slate-800/20');
            view.classList.add('hidden'); view.classList.remove('flex');
        }
    });

    const btnAtivo = document.getElementById(`tab-dir-${aba}`);
    const viewAtiva = document.getElementById(`view-${aba}`);
    
    if(btnAtivo && viewAtiva) {
        btnAtivo.classList.replace('text-slate-500', 'text-orange-500');
        btnAtivo.classList.replace('border-transparent', 'border-orange-500');
        btnAtivo.classList.add('bg-cardBg');
        btnAtivo.classList.remove('hover:text-slate-300', 'hover:bg-slate-800/20');
        viewAtiva.classList.remove('hidden'); viewAtiva.classList.add('flex');
    }

    if(aba === 'consolidada') renderizarTabelaConsolidada();
    else if(aba === 'estruturas') renderizarVisaoEstruturas();
    else if(aba === 'acompanhamento') renderizarAcompanhamento();
    else if(aba === 'levantamento') renderizarVitrine();
}

function atualizarTelas() { 
    renderizarTabelaConsolidada(); 
    renderizarAcompanhamento(); 
    renderizarVisaoEstruturas(); 
    renderizarVitrine();
}

function limparLevantamento() {
    if(confirm("Limpar todo o levantamento?")) { 
        materiaisConsolidados = {}; 
        historicoLancamentos = []; 
        renderizarHistoricoHTML(); 
        atualizarTelas(); 
    }
}

// ==========================================
// MOTOR DA VITRINE (CATÁLOGO ÚNICO)
// ==========================================
let abaVitrineAtiva = 'estruturas'; 

function mudarAbaVitrine(aba) {
    abaVitrineAtiva = aba;
    const abas = ['estruturas', 'postes', 'transformadores', 'cabos', 'outros'];
    
    // Reseta todos os botões
    abas.forEach(nome => {
        const btn = document.getElementById(`btn-vitrine-${nome}`);
        if(btn) {
            let extraClass = nome === 'estruturas' ? '' : 'border-l border-slate-700/80';
            btn.className = `px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white hover:bg-slate-800 transition-colors whitespace-nowrap ${extraClass}`;
        }
    });

    // Pinta o botão ativo
    const btnAtivo = document.getElementById(`btn-vitrine-${aba}`);
    if(btnAtivo) {
        if(aba === 'estruturas') {
            btnAtivo.className = "px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-orange-600/20 text-orange-500 hover:bg-orange-600/30 transition-colors whitespace-nowrap";
        } else {
            let extraClass = aba === 'estruturas' ? '' : 'border-l border-slate-700/80';
            btnAtivo.className = `${extraClass} px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-teal-600/20 text-teal-400 hover:bg-teal-600/30 transition-colors whitespace-nowrap`;
        }
    }
    
    document.getElementById('input-pesquisa-vitrine').value = ''; 
    renderizarVitrine();
}

function mudarQtdVitrine(inputId, delta, isAvulso) {
    const input = document.getElementById(inputId); if (!input) return;
    let val = parseFloat(input.value) || 0; val += delta;
    if (!isAvulso && val < 1) val = 1;
    if (isAvulso && val < 0.01) val = 0.01;
    input.value = Number.isInteger(val) ? val : parseFloat(val.toFixed(2));
}

function renderizarVitrine() {
    const container = document.getElementById('container-vitrine'); if (!container) return;
    const inputPesquisa = document.getElementById('input-pesquisa-vitrine');
    const filtro = inputPesquisa ? inputPesquisa.value.toUpperCase().trim() : "";
    
    let html = ""; let count = 0;

    if (abaVitrineAtiva === 'estruturas') {
        if (listaDeNomesDeEstruturas.length > 0) {
            listaDeNomesDeEstruturas.filter(est => est.toUpperCase().includes(filtro)).forEach(est => {
                count++;
                const idSeguro = 'est_' + btoa(unescape(encodeURIComponent(est))).replace(/[^a-zA-Z0-9]/g, '');
                html += criarCardVitrineHTML(idSeguro, est, "ESTRUTURA", "Estrutura Padrão", false, est);
            });
        }
    } else {
        // Lógica Inteligente para categorizar os avulsos (Usando Regex para palavras exatas)
        itensAvulsos.filter(item => {
            const descUpper = item.desc.toUpperCase();
            const atendePesquisa = item.cod.includes(filtro) || descUpper.includes(filtro);
            if(!atendePesquisa) return false;

            // O \b garante que ele só vai achar a palavra exata, ignorando partes de palavras (ex: ignora o TR dentro de DISTR)
            const isPoste = /\bPOSTES?\b/.test(descUpper);
            const isTrafo = /\b(TRANSF|TRANS|TR|TRANSFORMADOR)\b/.test(descUpper);
            const isCabo = /\b(CABO|CABOS|CORDOALHA|FIO)\b/.test(descUpper);

            if (abaVitrineAtiva === 'postes') return isPoste;
            if (abaVitrineAtiva === 'transformadores') return isTrafo;
            if (abaVitrineAtiva === 'cabos') return isCabo;
            if (abaVitrineAtiva === 'outros') return !isPoste && !isTrafo && !isCabo;
            
            return true;
        }).forEach(item => {
            count++;
            const idSeguro = 'avulso_' + item.cod;
            const desc = item.peso ? "Fornecido e Baixado em KG" : "Fornecido em Unidade";
            
            // Personaliza o Ícone e o Crachá dependendo da aba
            let badgeText = "AVULSO"; let customIcon = "fa-plug";
            if(abaVitrineAtiva === 'postes') { badgeText = "POSTE"; customIcon = "fa-grip-lines-vertical"; }
            else if(abaVitrineAtiva === 'transformadores') { badgeText = "TRAFO"; customIcon = "fa-charging-station"; }
            else if(abaVitrineAtiva === 'cabos') { badgeText = "CABO"; customIcon = "fa-wave-square"; }

            html += criarCardVitrineHTML(idSeguro, `${item.cod} - ${item.desc}`, badgeText, desc, true, item.cod, customIcon);
        });
    }

    if (count === 0 && abaVitrineAtiva === 'estruturas' && listaDeNomesDeEstruturas.length === 0) {
        container.innerHTML = `<div class="text-center text-slate-500 italic py-16 col-span-full"><i class="fas fa-file-excel text-4xl mb-4 opacity-30 block"></i>Importe a planilha de Material Aplicado para ver as estruturas.</div>`;
    } else if (count === 0) {
        container.innerHTML = `<div class="text-center text-slate-500 italic py-16 col-span-full"><i class="fas fa-search text-4xl mb-4 opacity-30 block"></i>Nenhum item encontrado nesta categoria.</div>`;
    } else {
        container.innerHTML = html;
    }
}

function criarCardVitrineHTML(id, nomeVisor, badgeText, descText, isAvulso, identificadorReal, customIcon = null) {
    const badgeClass = isAvulso ? "bg-teal-900/30 text-teal-400 border border-teal-800/50" : "bg-orange-900/30 text-orange-400 border border-orange-800/50";
    const btnClass = isAvulso ? "bg-teal-600 hover:bg-teal-500" : "bg-orange-600 hover:bg-orange-500";
    const iconClass = customIcon ? `${customIcon} text-teal-500` : (isAvulso ? "fa-plug text-teal-500" : "fa-layer-group text-orange-500");
    const step = isAvulso ? "0.01" : "1";
    const nomeEscapado = identificadorReal.replace(/'/g, "\\'").replace(/"/g, "&quot;");

    return `
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-darkBg border border-slate-700/60 p-2.5 rounded-lg hover:border-slate-500/50 transition-colors gap-2 group">
            <div class="flex-1 min-w-0 pr-2">
                <div class="flex items-center gap-2 mb-0.5">
                    <span class="text-[9px] font-bold px-1.5 py-0.5 rounded ${badgeClass} flex-shrink-0">${badgeText}</span>
                    <i class="fas ${iconClass} text-[10px]"></i>
                    <h4 class="text-white text-[11px] font-bold truncate flex-1 leading-tight" title="${nomeVisor}">${nomeVisor}</h4>
                </div>
                <p class="text-[9px] text-slate-400 truncate mt-1"><i class="fas fa-info-circle mr-1"></i>${descText}</p>
            </div>
            <div class="flex items-center gap-1.5 flex-shrink-0 bg-cardBg p-1.5 rounded-md border border-slate-800/80">
                <select id="tipo_${id}" class="bg-darkBg border border-slate-700 rounded px-1.5 py-1 text-[10px] font-bold text-slate-300 w-[72px] outline-none focus:border-orange-500 cursor-pointer">
                    <option value="OPERACIONAL">Oper.</option>
                    <option value="SUCATA">Sucata</option>
                </select>
                <div class="flex items-center bg-darkBg border border-slate-700 rounded overflow-hidden h-6 w-[76px] focus-within:border-orange-500">
                    <button type="button" onclick="mudarQtdVitrine('qtd_${id}', -1, ${isAvulso})" class="w-6 h-full flex items-center justify-center text-slate-400 hover:text-white bg-slate-800"><i class="fas fa-minus text-[8px]"></i></button>
                    <input type="number" id="qtd_${id}" value="1" step="${step}" min="${step}" class="flex-1 w-full bg-transparent text-white text-center text-[10px] font-bold outline-none">
                    <button type="button" onclick="mudarQtdVitrine('qtd_${id}', 1, ${isAvulso})" class="w-6 h-full flex items-center justify-center text-slate-400 hover:text-white bg-slate-800"><i class="fas fa-plus text-[8px]"></i></button>
                </div>
                <button type="button" onclick="inserirDaVitrine('${id}', ${isAvulso}, '${nomeEscapado}', this)" class="${btnClass} text-white rounded h-6 w-8 flex items-center justify-center transition-all active:scale-90" title="Inserir no Levantamento"><i class="fas fa-plus text-[10px]"></i></button>
            </div>
        </div>
    `;
}

function inserirDaVitrine(idElemento, isAvulso, identificador, btn) {
    const inputQtd = document.getElementById('qtd_' + idElemento);
    const inputTipo = document.getElementById('tipo_' + idElemento);
    const quantidadeDigitada = parseFloat(inputQtd.value) || 1;
    const tipoSelecionado = inputTipo.value;

    if (!isAvulso) {
        const itensLancados = [];
        bancoDeEstruturas[identificador].forEach(item => {
            const qtdNecessaria = item.qtdBase * quantidadeDigitada; 
            const chaveMat = `${item.codigo}_${tipoSelecionado}`;
            itensLancados.push({ chave: chaveMat, qtd: qtdNecessaria });
            adicionarAoConsolidado(item.codigo, item.descricao, qtdNecessaria, tipoSelecionado, null);
        });

        const indexExistente = historicoLancamentos.findIndex(l => l.nome === identificador && l.tipo === tipoSelecionado && !l.isAvulso);
        if (indexExistente !== -1) {
            historicoLancamentos[indexExistente].qtdVisor += quantidadeDigitada;
            historicoLancamentos[indexExistente].itens.forEach((i, idx) => { i.qtd += itensLancados[idx].qtd; });
            const movido = historicoLancamentos.splice(indexExistente, 1)[0];
            historicoLancamentos.push(movido);
        } else {
            historicoLancamentos.push({ id: Date.now().toString(), nome: identificador, qtdVisor: quantidadeDigitada, tipo: tipoSelecionado, isAvulso: false, itens: itensLancados });
        }
    } else {
        const itemObj = itensAvulsos.find(i => i.cod === identificador); if(!itemObj) return;
        let qtdFinal = quantidadeDigitada; let descFinal = itemObj.desc;
        if (itemObj.peso) { qtdFinal = quantidadeDigitada * itemObj.peso; descFinal = `${itemObj.desc} (KG)`; }
        
        adicionarAoConsolidado(itemObj.cod, descFinal, qtdFinal, tipoSelecionado, null);
        
        const indexExistente = historicoLancamentos.findIndex(l => l.nome.startsWith(itemObj.desc) && l.tipo === tipoSelecionado && l.isAvulso);
        if (indexExistente !== -1) {
            const lanc = historicoLancamentos[indexExistente];
            lanc.itens[0].qtd += qtdFinal;
            lanc.qtdVisor = itemObj.peso ? lanc.itens[0].qtd.toFixed(2) + "kg" : (lanc.qtdVisor + quantidadeDigitada);
            const movido = historicoLancamentos.splice(indexExistente, 1)[0];
            historicoLancamentos.push(movido);
        } else {
            let nomeHist = itemObj.desc; if (itemObj.peso) nomeHist += ` (Convertido p/ KG)`;
            historicoLancamentos.push({ id: Date.now().toString(), nome: nomeHist, qtdVisor: itemObj.peso ? qtdFinal.toFixed(2) + "kg" : quantidadeDigitada, tipo: tipoSelecionado, isAvulso: true, itens: [{ chave: `${itemObj.cod}_${tipoSelecionado}`, qtd: qtdFinal }] });
        }
    }

    const iconeOriginal = btn.innerHTML;
    btn.innerHTML = `<i class="fas fa-check text-white"></i>`;
    btn.classList.replace('bg-orange-600', 'bg-success'); btn.classList.replace('hover:bg-orange-500', 'bg-success');
    btn.classList.replace('bg-teal-600', 'bg-success'); btn.classList.replace('hover:bg-teal-500', 'bg-success');
    setTimeout(() => { 
        btn.innerHTML = iconeOriginal; 
        inputQtd.value = "1";
        btn.className = btn.className.replace('bg-success', isAvulso ? 'bg-teal-600 hover:bg-teal-500' : 'bg-orange-600 hover:bg-orange-500');
    }, 500);

    renderizarHistoricoHTML();
    atualizarTelas();
}

// ==========================================
// UI DOS CARTÕES BASE
// ==========================================
function resetarCartaoBase(idBase) {
    const card = document.getElementById(`card-base-${idBase}`); const icon = document.getElementById(`icon-base-${idBase}`); const btn = document.getElementById(`btn-base-${idBase}`);
    btn.innerText = "Lendo..."; card.classList.remove('border-success', 'border-danger'); card.classList.add('border-slate-700/60');
    return { card, icon, btn };
}

function sucessoCartaoBase(ui, iconeOriginal, msg) {
    ui.card.classList.add('border-success', 'bg-success/5'); ui.icon.classList.replace(iconeOriginal, 'fa-check-circle'); ui.icon.classList.replace('fa-times-circle', 'fa-check-circle'); ui.icon.classList.replace('text-slate-500', 'text-success'); ui.icon.classList.replace('text-danger', 'text-success');
    ui.btn.innerText = "Base Carregada!"; ui.btn.classList.replace('bg-slate-800', 'bg-success'); ui.btn.classList.replace('bg-danger', 'bg-success'); ui.btn.classList.replace('text-slate-300', 'text-white');
    if(msg) alert(msg);
}

function erroCartaoBase(ui, iconeOriginal, msg) {
    ui.card.classList.add('border-danger', 'bg-danger/5'); ui.icon.classList.replace(iconeOriginal, 'fa-times-circle'); ui.icon.classList.replace('text-slate-500', 'text-danger');
    ui.btn.innerText = "Tentar Novamente"; ui.btn.classList.replace('bg-slate-800', 'bg-danger'); ui.btn.classList.replace('text-slate-300', 'text-white');
    if(msg) alert(msg);
}

// ==========================================
// IMPORTAÇÕES
// ==========================================
function importarMaterial(arrayBuffer) {
    const ui = resetarCartaoBase('material');
    try {
        const workbook = XLSX.read(new Uint8Array(arrayBuffer), {type: 'array'});
        bancoDeEstruturas = {}; let qtdCarregada = 0; 
        const ignoreList = ["QUANT", "QTD", "QUANTIDADE", "QUANT.", "CÓDIGO", "CODIGO", "CÓD", "COD", "DESCRIÇÃO", "DESCRICAO", "DESCRIÇÃO DO MATERIAL", "MATERIAL", "ITEM", "ESTRUTURA CONSTRUÇÃO", "ESTRUTURA CONSTRUCAO", "REDE MT", "REDE BT", "REDE MT/BT", "POSTES", "TRANSFORMADORES", "CONVENSIONAL", "CONVENCIONAL"];
        workbook.SheetNames.forEach(sheetName => {
            const json = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header: 1, defval: ""});
            let estruturaAtual = ""; 
            json.forEach((row) => {
                if (!row || row.length === 0) return;
                const cleanCells = [];
                for(let key in row) { let val = String(row[key]).trim(); if(val !== "") cleanCells.push(val); }
                if (cleanCells.length === 0) return;
                let isMaterial = false;
                if (cleanCells.length >= 3) {
                    const firstCell = cleanCells[0].toUpperCase();
                    const parsedNum = parseFloat(cleanCells[0].replace(',', '.'));
                    if (!isNaN(parsedNum) && parsedNum > 0 && !firstCell.includes("ITEM")) {
                        const q = parsedNum; const c = cleanCells[1];
                        let descParts = cleanCells.slice(2);
                        if (descParts[descParts.length - 1] === "0") descParts.pop(); 
                        const d = descParts.join(" "); 
                        if (estruturaAtual && c && d) {
                            if (!bancoDeEstruturas[estruturaAtual]) { bancoDeEstruturas[estruturaAtual] = []; qtdCarregada++; }
                            bancoDeEstruturas[estruturaAtual].push({ qtdBase: q, codigo: c, descricao: d });
                        }
                        isMaterial = true;
                    }
                }
                if (!isMaterial) {
                    for (let cell of cleanCells) {
                        const cellUpper = cell.toUpperCase(); let isIgnored = false;
                        for (let ignoreWord of ignoreList) {
                            if (cellUpper.includes(ignoreWord)) { if (!cellUpper.includes("KIT CFU")) { isIgnored = true; break; } }
                        }
                        if (!isIgnored && cell.length > 2) { estruturaAtual = cellUpper; break; }
                    }
                }
            });
        });
        if (qtdCarregada > 0) {
            listaDeNomesDeEstruturas = Object.keys(bancoDeEstruturas).sort((a,b)=>a.localeCompare(b));
            sucessoCartaoBase(ui, 'fa-file-excel', null);
            renderizarVitrine();
        } else erroCartaoBase(ui, 'fa-file-excel', "Nenhuma estrutura detectada.");
    } catch (err) { erroCartaoBase(ui, 'fa-file-excel', "Erro ao processar arquivo."); }
}

function importarSaldo(arrayBuffer) {
    const ui = resetarCartaoBase('saldo');
    try {
        const workbook = XLSX.read(new Uint8Array(arrayBuffer), {type: 'array'});
        bancoDeSaldos = {}; let loaded = 0; 
        workbook.SheetNames.forEach(sheetName => {
            const json = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header: 1, defval: ""});
            let iC = -1, iD = -1, iS = -1, iDesc = -1;
            json.forEach((row, rIdx) => {
                if (!row || row.length === 0) return;
                const cleanCells = row.map(v => String(v || "").toUpperCase().trim());
                if (iC === -1) {
                    iC = cleanCells.findIndex(v => v === "CODMAT" || v === "CÓDIGO" || v === "MATERIAL"); iD = cleanCells.findIndex(v => v === "CODREG" || v.includes("DEPOSITO")); iS = cleanCells.findIndex(v => v === "SALDO_OPER" || v.includes("SALDO") || v === "QTD"); iDesc = cleanCells.findIndex(v => v === "DSCMAT" || v.includes("DESCRI"));
                    if (iC === -1 && rIdx >= 4) { iC = 1; iD = 2; iDesc = 4; iS = 8; } return;
                }
                const cod = String(row[iC] || "").trim(); const dep = String(row[iD] || "").trim(); const saldoStr = String(row[iS] || "").trim(); const descStr = iDesc !== -1 ? String(row[iDesc] || "").trim() : "";
                if (cod && (dep === "2161" || dep === "2165")) {
                    const sFloat = parseFloat(saldoStr.replace(',', '.')) || 0;
                    if (!bancoDeSaldos[cod]) bancoDeSaldos[cod] = { "2161": 0, "2165": 0, desc: descStr };
                    bancoDeSaldos[cod][dep] = sFloat; if(descStr && !bancoDeSaldos[cod].desc) bancoDeSaldos[cod].desc = descStr; 
                    loaded++;
                }
            });
        });
        if (loaded > 0) { sucessoCartaoBase(ui, 'fa-balance-scale', null); renderizarTabelaConsolidada(); } 
        else erroCartaoBase(ui, 'fa-balance-scale', "Nenhum saldo encontrado.");
    } catch (err) { erroCartaoBase(ui, 'fa-balance-scale', "Erro ao processar Saldos."); }
}

function importarDePara(arrayBuffer) {
    const ui = resetarCartaoBase('depara');
    try {
        const workbook = XLSX.read(new Uint8Array(arrayBuffer), {type: 'array'});
        bancoDePara = {}; let loaded = 0; 
        workbook.SheetNames.forEach(sheetName => {
            const json = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header: 1, defval: ""});
            let iOrig = -1, iSub = -1, iDesc = -1;
            json.forEach((row, rIdx) => {
                if (!row || row.length === 0) return;
                const cleanCells = row.map(v => String(v || "").toUpperCase().trim());
                if (iOrig === -1) {
                    iOrig = cleanCells.findIndex(v => v.includes("ORIGINAL") || v === "DE"); iSub = cleanCells.findIndex(v => v.includes("PARA") || v.includes("SUBSTITUTO")); iDesc = cleanCells.findIndex(v => v.includes("DESCRI"));
                    if (iOrig === -1 && rIdx >= 2) { iOrig = 0; iSub = 1; iDesc = 2; } return;
                }
                const orig = String(row[iOrig] || "").trim(); const sub = String(row[iSub] || "").trim(); const desc = iDesc !== -1 ? String(row[iDesc] || "").trim() : "";
                if (orig && sub && !orig.toUpperCase().includes("ORIGINAL")) {
                    if (!bancoDePara[orig]) bancoDePara[orig] = [];
                    if (!bancoDePara[orig].some(x => x.cod === sub)) { bancoDePara[orig].push({ cod: sub, desc: desc }); loaded++; }
                }
            });
        });
        if (loaded > 0) { sucessoCartaoBase(ui, 'fa-exchange-alt', null); renderizarTabelaConsolidada(); } 
        else { erroCartaoBase(ui, 'fa-exchange-alt', "Arquivo vazio ou fora do padrão."); }
    } catch (err) { erroCartaoBase(ui, 'fa-exchange-alt', "Erro ao processar DE-PARA."); }
}

function importarPrevisto(arrayBuffer) {
    const ui = resetarCartaoBase('previsto');
    try {
        const workbook = XLSX.read(new Uint8Array(arrayBuffer), {type: 'array'});
        bancoPrevisto = {}; let loaded = 0; 
        workbook.SheetNames.forEach(sheetName => {
            const json = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header: 1, defval: ""});
            let iO = -1, iC = -1, iR = -1, iD = -1, iT = -1, iDescM = -1;
            json.forEach((row, rIdx) => {
                if (!row || row.length === 0) return;
                const cleanCells = row.map(v => String(v || "").toUpperCase().trim());
                if (iO === -1) {
                    iO = cleanCells.findIndex(v => v.includes("NUM_OBRA") || v.includes("Nº OBRA") || v === "OBRA"); iC = cleanCells.findIndex(v => v.includes("COD_ITEM_OBRA") || v.includes("CODIGO_ITEM") || v === "CÓDIGO"); iR = cleanCells.findIndex(v => v.includes("QTD_RMA") || v === "W"); iD = cleanCells.findIndex(v => v.includes("QTD_DMA") || v === "Y"); iT = cleanCells.findIndex(v => v.includes("TIPO_MOVIMENTO") || v.includes("CC_TIPO_MOVIMENTO")); iDescM = cleanCells.findIndex(v => v.includes("MATERIAL_DESCRI") || v.includes("CD_MATERIAL_DESCRICAO") || v === "DESCRIÇÃO");
                    if (iO === -1 && rIdx >= 2) { iO = 7; iC = 18; iDescM = 19; iR = 22; iD = 24; iT = 28; } return;
                }
                const nORaw = String(row[iO] || "").toUpperCase().trim(); const nO = nORaw.replace(/[^A-Z0-9-]/g, '').replace(/^0+/, ''); const cod = String(row[iC] || "").trim(); const descMatStr = iDescM !== -1 ? String(row[iDescM] || "").trim() : "";
                if (!nO || nO.includes("OBRA") || !cod || cod.includes("COD")) return;
                const valRMA = parseFloat(String(row[iR] || "0").replace(',', '.')) || 0; const valDMA = parseFloat(String(row[iD] || "0").replace(',', '.')) || 0; const tipoMov = String(row[iT] || "").toUpperCase().trim();
                if (!bancoPrevisto[nO]) bancoPrevisto[nO] = {};
                if (!bancoPrevisto[nO][cod]) bancoPrevisto[nO][cod] = { OPERACIONAL: 0, SUCATA: 0, desc: descMatStr };
                if (descMatStr && !bancoPrevisto[nO][cod].desc) bancoPrevisto[nO][cod].desc = descMatStr;
                if (tipoMov.includes("DESATIVA")) bancoPrevisto[nO][cod].SUCATA += valDMA; else bancoPrevisto[nO][cod].OPERACIONAL += (valRMA - valDMA);
                loaded++;
            });
        });
        if (loaded > 0) { sucessoCartaoBase(ui, 'fa-file-invoice', null); renderizarAcompanhamento(); } 
        else { erroCartaoBase(ui, 'fa-file-invoice', "A planilha Previsto está vazia."); }
    } catch (err) { erroCartaoBase(ui, 'fa-file-invoice', "Erro ao ler a planilha Previsto."); }
}

function mostrarLoader() {
    const loader = document.getElementById('loading-overlay');
    if(loader) { loader.classList.remove('hidden'); loader.classList.add('flex'); }
}

function ocultarLoader() {
    const loader = document.getElementById('loading-overlay');
    if(loader) { loader.classList.add('hidden'); loader.classList.remove('flex'); }
}

document.getElementById('input-base-material').addEventListener('change', e => { 
    if(e.target.files[0]){ mostrarLoader(); const ui = resetarCartaoBase('material'); const r = new FileReader(); r.onload = ev => { setTimeout(() => { importarMaterial(ev.target.result, ui); ocultarLoader(); alert("Material Aplicado carregado!"); }, 100); }; r.readAsArrayBuffer(e.target.files[0]); }
});
document.getElementById('input-base-saldo').addEventListener('change', e => { 
    if(e.target.files[0]){ mostrarLoader(); const ui = resetarCartaoBase('saldo'); const r = new FileReader(); r.onload = ev => { setTimeout(() => { importarSaldo(ev.target.result, ui); ocultarLoader(); alert("Saldos carregados!"); }, 100); }; r.readAsArrayBuffer(e.target.files[0]); }
});
document.getElementById('input-base-depara').addEventListener('change', e => { 
    if(e.target.files[0]){ mostrarLoader(); const ui = resetarCartaoBase('depara'); const r = new FileReader(); r.onload = ev => { setTimeout(() => { importarDePara(ev.target.result, ui); ocultarLoader(); alert("DE-PARA carregado!"); }, 100); }; r.readAsArrayBuffer(e.target.files[0]); }
});
document.getElementById('input-base-previsto').addEventListener('change', e => { 
    if(e.target.files[0]){ mostrarLoader(); const ui = resetarCartaoBase('previsto'); const r = new FileReader(); r.onload = ev => { setTimeout(() => { importarPrevisto(ev.target.result, ui); ocultarLoader(); alert("Previsto carregado!"); }, 100); }; r.readAsArrayBuffer(e.target.files[0]); }
});

document.getElementById('input-base-todas').addEventListener('change', function(e) {
    const files = e.target.files; if(files.length === 0) return;
    mostrarLoader(); let lidas = 0;
    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(evt) {
            setTimeout(() => {
                const arrayBuffer = evt.target.result;
                const workbook = XLSX.read(new Uint8Array(arrayBuffer), {type: 'array'});
                const json = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {header: 1, defval: ""});
                let tipoPlanilha = "MATERIAL"; 
                for(let i = 0; i < Math.min(json.length, 10); i++) {
                    const rowStr = json[i].map(v => String(v).toUpperCase()).join(" ");
                    if(rowStr.includes("QTD_RMA") || rowStr.includes("NUM_OBRA") || rowStr.includes("W") || rowStr.includes("Y")) { tipoPlanilha = "PREVISTO"; break; }
                    if(rowStr.includes("CODMAT") || rowStr.includes("SALDO_OPER") || rowStr.includes("DSCMAT")) { tipoPlanilha = "SALDO"; break; }
                    if(rowStr.includes("ORIGINAL") && (rowStr.includes("PARA") || rowStr.includes("SUBSTITUTO"))) { tipoPlanilha = "DEPARA"; break; }
                }
                if(tipoPlanilha === "MATERIAL") importarMaterial(arrayBuffer, resetarCartaoBase('material'));
                else if(tipoPlanilha === "SALDO") importarSaldo(arrayBuffer, resetarCartaoBase('saldo'));
                else if(tipoPlanilha === "DEPARA") importarDePara(arrayBuffer, resetarCartaoBase('depara'));
                else if(tipoPlanilha === "PREVISTO") importarPrevisto(arrayBuffer, resetarCartaoBase('previsto'));
                
                lidas++;
                if(lidas === files.length) { ocultarLoader(); setTimeout(() => alert(`${files.length} planilhas identificadas e importadas com sucesso!`), 300); }
            }, 100); 
        };
        reader.readAsArrayBuffer(file);
    });
});

// ==========================================
// LÓGICA DE CONSOLIDAÇÃO E HISTÓRICO
// ==========================================
function adicionarAoConsolidado(codigo, desc, qtd, tipo, parentChave) {
    const chave = parentChave ? `${codigo}_${tipo}_SUB_${parentChave}` : `${codigo}_${tipo}`;
    if (materiaisConsolidados[chave]) {
        materiaisConsolidados[chave].qtdTotal += qtd;
        if(String(materiaisConsolidados[chave].desc).includes("Convertido de")) materiaisConsolidados[chave].desc = `${String(desc).split('(')[0].trim()} (KG)`;
    } else {
        materiaisConsolidados[chave] = { codigo: codigo, desc: desc, qtdTotal: qtd, tipo: tipo, trocasAtivas: [], isSubstituto: !!parentChave, parentChave: parentChave };
    }
}

function renderizarHistoricoHTML() {
    const divHistorico = document.getElementById('historico-estruturas'); if(!divHistorico) return;
    divHistorico.innerHTML = "";
    
    const badge = document.getElementById('badge-historico-qtd');
    if(badge) badge.innerText = `${historicoLancamentos.length} Itens`;

    if (historicoLancamentos.length === 0) { divHistorico.innerHTML = `<div class="text-center text-slate-600 text-xs italic py-4">Nenhum lançamento feito.</div>`; return; }

    [...historicoLancamentos].reverse().forEach(lanc => {
        const badgeTipoClass = lanc.tipo === 'OPERACIONAL' ? 'bg-blue-900/40 text-blue-400 border border-blue-800/50' : 'bg-red-900/40 text-red-400 border border-red-800/50';
        const iconBadge = lanc.isAvulso ? '<i class="fas fa-plug text-slate-500 mr-2 text-[10px]"></i>' : '<i class="fas fa-layer-group text-orange-500 mr-2 text-[10px]"></i>';
        const qtdTexto = (typeof lanc.qtdVisor === 'string' && lanc.qtdVisor.includes('kg')) ? lanc.qtdVisor : lanc.qtdVisor + 'x';
        const divItem = document.createElement('div'); divItem.className = "flex justify-between items-center bg-darkBg border border-slate-700/50 p-2.5 rounded-lg animate-[fadeIn_0.3s_ease-out] group";
        divItem.innerHTML = `
            <div class="flex items-center w-full overflow-hidden">
                <span class="font-bold ${lanc.isAvulso ? 'text-teal-400 bg-teal-900/30' : 'text-orange-400 bg-orange-900/30'} px-1.5 py-0.5 rounded text-[10px] mr-2 flex-shrink-0">${qtdTexto}</span>
                ${iconBadge}<span class="text-white font-medium text-[11px] mr-2 truncate flex-1" title="${lanc.nome}">${lanc.nome}</span>
                <span class="text-[8px] uppercase font-bold px-1.5 py-0.5 rounded flex-shrink-0 ${badgeTipoClass} mr-2">${lanc.tipo.substring(0,4)}</span>
                <button type="button" onclick="removerDoHistorico('${lanc.id}')" class="text-slate-500 hover:text-danger opacity-0 group-hover:opacity-100 transition-opacity p-1.5 bg-slate-800 hover:bg-danger/20 rounded border border-transparent hover:border-danger/30 cursor-pointer" title="Excluir Lançamento"><i class="fas fa-times"></i></button>
            </div>`; divHistorico.appendChild(divItem);
    });
}

function removerDoHistorico(id) {
    const lanc = historicoLancamentos.find(l => l.id === id); if(!lanc) return;
    let temTroca = false;
    lanc.itens.forEach(i => { if(materiaisConsolidados[i.chave] && materiaisConsolidados[i.chave].trocasAtivas && materiaisConsolidados[i.chave].trocasAtivas.length > 0) temTroca = true; });
    if(temTroca) { if(!confirm("Este lançamento possui materiais substituídos (DE-PARA). Se prosseguir, as substituições também sumirão. Confirmar?")) return; }

    lanc.itens.forEach(i => {
        if(materiaisConsolidados[i.chave]) {
            if (materiaisConsolidados[i.chave].trocasAtivas && materiaisConsolidados[i.chave].trocasAtivas.length > 0) {
                materiaisConsolidados[i.chave].trocasAtivas.forEach(troca => {
                    troca.itensSubstitutos.forEach(t => {
                        const chaveNova = `${t.cod}_${materiaisConsolidados[i.chave].tipo}_SUB_${i.chave}`;
                        if(materiaisConsolidados[chaveNova]) { materiaisConsolidados[chaveNova].qtdTotal -= t.qtd; if(materiaisConsolidados[chaveNova].qtdTotal <= 0.001) delete materiaisConsolidados[chaveNova]; }
                    });
                });
            }
            materiaisConsolidados[i.chave].qtdTotal -= i.qtd;
            if(materiaisConsolidados[i.chave].qtdTotal <= 0.001) { delete materiaisConsolidados[i.chave]; } else if (materiaisConsolidados[i.chave].qtdTotal < 0) { materiaisConsolidados[i.chave].qtdTotal = 0; }
        }
    });
    historicoLancamentos = historicoLancamentos.filter(l => l.id !== id); renderizarHistoricoHTML(); atualizarTelas();
}

// ==========================================
// RENDERIZAR COMPOSIÇÃO DE ESTRUTURAS (COM SALDOS E ALERTAS)
// ==========================================
function renderizarVisaoEstruturas() {
    const container = document.getElementById('container-composicao'); if(!container) return;
    container.innerHTML = "";

    if (historicoLancamentos.length === 0) { 
        container.innerHTML = `<div class="text-center text-slate-500 italic py-16"><i class="fas fa-sitemap text-4xl mb-4 opacity-30 block"></i>Adicione estruturas para ver o detalhamento.</div>`; return; 
    }

    const iOR = document.getElementById('input-numero-obra').value.trim().toUpperCase();
    const nO = iOR.replace(/[^A-Z0-9-]/g, '').replace(/^0+/, '');
    const dO = bancoPrevisto[nO] || {};

    // Sincroniza qual depósito estamos olhando
    const depositoParaAnalise = document.getElementById('select-deposito-analise') ? document.getElementById('select-deposito-analise').value : '2161';
    const dropComp = document.getElementById('select-deposito-composicao');
    if(dropComp) dropComp.value = depositoParaAnalise;

    let saldoBaixado = {};
    Object.keys(dO).forEach(cod => {
        saldoBaixado[cod] = { 
            'OPERACIONAL': dO[cod]['OPERACIONAL'] || 0, 
            'SUCATA': dO[cod]['SUCATA'] || 0,
            'desc': dO[cod].desc || (bancoDeSaldos[cod] ? bancoDeSaldos[cod].desc : "Descrição indisponível")
        };
    });

    // NOVO: Balde Cascata do Estoque Físico!
    let estoqueFisico = {};
    Object.keys(bancoDeSaldos).forEach(cod => {
        estoqueFisico[cod] = { 
            "2161": bancoDeSaldos[cod]["2161"] || 0, 
            "2165": bancoDeSaldos[cod]["2165"] || 0 
        };
    });

    // NOVO: Conexão com o DE-PARA da Medição
    let poolTrocas = {};
    Object.keys(materiaisConsolidados).forEach(chave => {
        const mat = materiaisConsolidados[chave];
        if (mat.trocasAtivas && mat.trocasAtivas.length > 0) {
            poolTrocas[chave] = 0;
            mat.trocasAtivas.forEach(t => { poolTrocas[chave] += t.qtdOriginalTrocada; });
        }
    });

    const cardsHTML = [];

    historicoLancamentos.forEach(lanc => {
        const badgeTipo = lanc.tipo === 'OPERACIONAL' ? 'bg-blue-600 text-white' : 'bg-red-600 text-white';
        const icone = lanc.isAvulso ? 'fa-plug text-teal-400' : 'fa-layer-group text-orange-500';
        
        let linhasMateriais = '';
        lanc.itens.forEach(item => {
            const codigoReal = item.chave.split('_')[0];
            const matSalvo = materiaisConsolidados[item.chave];
            const descricao = matSalvo ? matSalvo.desc : "Descrição indisponível";
            const qtdNecessaria = item.qtd;

            // A. Resolve via DE-PARA (Se foi aprovado na Medição)
            let qtdTrocadaAqui = 0;
            if (poolTrocas[item.chave] && poolTrocas[item.chave] > 0) {
                qtdTrocadaAqui = Math.min(qtdNecessaria, poolTrocas[item.chave]);
                poolTrocas[item.chave] -= qtdTrocadaAqui;
            }

            // B. Distribui saldo do Previsto (Baixado) para o que NÃO foi trocado
            let qtdBaixadaAqui = 0;
            if (saldoBaixado[codigoReal] && saldoBaixado[codigoReal][lanc.tipo] > 0) {
                const disponivel = saldoBaixado[codigoReal][lanc.tipo];
                qtdBaixadaAqui = Math.min(qtdNecessaria - qtdTrocadaAqui, disponivel); 
                saldoBaixado[codigoReal][lanc.tipo] -= qtdBaixadaAqui; 
            }

            // C. NOVO: Distribui o Estoque Físico (Desconta o que já foi trocado)
            let estoqueDisponivelAqui = 0;
            let qtdRestanteAPreencher = qtdNecessaria - qtdTrocadaAqui;
            if (qtdRestanteAPreencher > 0 && estoqueFisico[codigoReal] && estoqueFisico[codigoReal][depositoParaAnalise] > 0) {
                estoqueDisponivelAqui = Math.min(qtdRestanteAPreencher, estoqueFisico[codigoReal][depositoParaAnalise]);
                estoqueFisico[codigoReal][depositoParaAnalise] -= estoqueDisponivelAqui;
            }
            const faltaEstoque = qtdRestanteAPreencher - estoqueDisponivelAqui;

            // Inteligência de Alertas DE-PARA na Composição
            let bInt = '';
            if (qtdTrocadaAqui > 0.01) {
                 bInt += `<div class="mt-1.5 flex items-center bg-green-900/10 border border-green-800/40 p-1.5 rounded gap-2"><span class="text-[9px] text-green-400 font-medium"><i class="fas fa-check-circle mr-1"></i> ✅ <b>${qtdTrocadaAqui.toFixed(2).replace(/\.00$/,'')}</b> un. resolvida(s) via DE-PARA (Medição).</span></div>`;
            }

            if (lanc.tipo === 'OPERACIONAL' && faltaEstoque > 0.01) {
                const subs = bancoDePara[codigoReal] || [];
                if (subs.length > 0) {
                    bInt += `<div class="mt-1.5 flex items-center bg-orange-900/20 border border-orange-800/50 p-1.5 rounded gap-2"><span class="text-[9px] text-orange-400 font-medium"><i class="fas fa-exclamation-triangle mr-1"></i> Faltam <b>${faltaEstoque.toFixed(2).replace(/\.00$/,'')}</b> no Dep ${depositoParaAnalise}. <span class="underline decoration-orange-500/50">Há substitutos! Aprove na Medição.</span></span></div>`;
                } else {
                    bInt += `<div class="mt-1.5 flex items-center bg-red-900/20 border border-red-800/50 p-1.5 rounded gap-2"><span class="text-[9px] text-red-400 font-medium"><i class="fas fa-times-circle mr-1"></i> Faltam <b>${faltaEstoque.toFixed(2).replace(/\.00$/,'')}</b> no Dep ${depositoParaAnalise}. Sem estoque/substituto.</span></div>`;
                }
            }

            // Visual das colunas de Depósito (Fixos globais para referência)
            const s = bancoDeSaldos[codigoReal] || { "2161": 0, "2165": 0 };
            const s2161 = Number.isInteger(s["2161"]) ? s["2161"] : s["2161"].toFixed(2).replace('.', ',');
            const s2165 = Number.isInteger(s["2165"]) ? s["2165"] : s["2165"].toFixed(2).replace('.', ',');
            const c2161 = s["2161"] === 0 ? "text-slate-600" : "text-slate-300";
            const c2165 = s["2165"] === 0 ? "text-slate-600" : "text-slate-300";

            const faltaStatus = qtdNecessaria - qtdBaixadaAqui - qtdTrocadaAqui;
            let statusBadge = "";
            if (faltaStatus > 0.01) statusBadge = `<span class="bg-orange-600 text-white px-2.5 py-1 rounded text-[10px] font-bold uppercase shadow-sm">RMA</span>`;
            else statusBadge = `<span class="bg-green-600 text-white px-2.5 py-1 rounded text-[10px] font-bold uppercase shadow-sm">OK</span>`;

            const qVis = Number.isInteger(qtdNecessaria) ? qtdNecessaria : qtdNecessaria.toFixed(2);
            
            let bVis = qtdBaixadaAqui === 0 ? "-" : (Number.isInteger(qtdBaixadaAqui) ? qtdBaixadaAqui : qtdBaixadaAqui.toFixed(2));
            let corBaixado = (qtdBaixadaAqui + qtdTrocadaAqui) >= qtdNecessaria ? 'text-green-400' : (qtdBaixadaAqui > 0 ? 'text-yellow-400' : 'text-slate-500');
            
            if (qtdTrocadaAqui > 0.01 && qtdBaixadaAqui === 0) {
                bVis = `<span class="text-green-400/80 text-[10px]">DE-PARA</span>`;
            } else if (qtdTrocadaAqui > 0.01) {
                bVis += `<br><span class="text-green-400/80 text-[9px]">+${qtdTrocadaAqui.toFixed(2).replace(/\.00$/,'')} DP</span>`;
            }

            linhasMateriais += `
                <tr class="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                    <td class="py-3 px-3 font-mono text-[13px] text-slate-400 w-20 align-top">${codigoReal}</td>
                    <td class="py-3 px-3 text-[13px] text-white whitespace-normal align-top leading-relaxed"><div class="flex-1 w-full overflow-hidden">${descricao}${bInt}</div></td>
                    <td class="py-3 px-2 text-center font-mono text-[11px] ${c2161} bg-darkBg/10 border-l border-slate-800/50 w-14 align-top">${s2161}</td>
                    <td class="py-3 px-2 text-center font-mono text-[11px] ${c2165} bg-darkBg/10 border-r border-slate-800/50 w-14 align-top">${s2165}</td>
                    <td class="py-3 px-3 text-[14px] font-bold text-orange-400 text-center w-20 align-top">${qVis}</td>
                    <td class="py-3 px-3 text-[14px] font-bold ${corBaixado} text-center w-20 align-top">${bVis}</td>
                    <td class="py-3 px-3 text-center w-24 align-top">${statusBadge}</td>
                </tr>
            `;
        });

        const card = `
            <div class="bg-cardBg border border-slate-700/80 rounded-xl overflow-hidden shadow-md mb-6 animate-[fadeIn_0.3s_ease-out]">
                <div class="bg-darkBg/80 border-b border-slate-700/80 p-3 flex justify-between items-center">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center"><i class="fas ${icone}"></i></div>
                        <div>
                            <h4 class="text-white font-bold text-sm tracking-wide">${lanc.nome}</h4>
                            <div class="flex items-center gap-2 mt-1">
                                <span class="text-[10px] font-bold bg-slate-800 text-slate-300 px-2 py-0.5 rounded">QTD: ${lanc.qtdVisor}</span>
                                <span class="text-[10px] font-bold ${badgeTipo} px-2 py-0.5 rounded">${lanc.tipo}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-0">
                    <table class="w-full text-left border-collapse table-fixed">
                        <thead class="bg-darkBg/40">
                            <tr class="text-[10px] uppercase tracking-widest text-slate-500 border-b border-slate-800">
                                <th class="py-2.5 px-3 w-20">Código</th>
                                <th class="py-2.5 px-3 w-auto">Material Contido</th>
                                <th class="py-2.5 px-2 text-center w-14" title="Estoque Físico Total 2161">2161</th>
                                <th class="py-2.5 px-2 text-center w-14" title="Estoque Físico Total 2165">2165</th>
                                <th class="py-2.5 px-3 text-center w-20">Estrutura</th>
                                <th class="py-2.5 px-3 text-center w-20">Baixado</th>
                                <th class="py-2.5 px-3 text-center w-24">Status</th>
                            </tr>
                        </thead>
                        <tbody>${linhasMateriais}</tbody>
                    </table>
                </div>
            </div>
        `;
        cardsHTML.push(card);
    });

    let linhasSobras = '';
    Object.keys(saldoBaixado).forEach(cod => {
        ['OPERACIONAL', 'SUCATA'].forEach(tipo => {
            const sobra = saldoBaixado[cod][tipo];
            if (sobra > 0.001) {
                const totalBaixado = dO[cod] ? (dO[cod][tipo] || 0) : 0;
                const chaveMat = `${cod}_${tipo}`;
                const orcadoMD = materiaisConsolidados[chaveMat] ? materiaisConsolidados[chaveMat].qtdTotal : 0;

                const statusSobra = orcadoMD > 0 ? "DMA" : "NÃO MEDIDO";
                const classSobra = orcadoMD > 0 ? "bg-red-600" : "bg-purple-600";
                const badgeTipo = tipo === 'OPERACIONAL' ? '<span class="bg-blue-600 text-white px-2 py-0.5 rounded text-[9px] font-bold uppercase">OPERACIONAL</span>' : '<span class="bg-red-600 text-white px-2 py-0.5 rounded text-[9px] font-bold uppercase">SUCATA</span>';

                const visTotalBaixado = Number.isInteger(totalBaixado) ? totalBaixado : totalBaixado.toFixed(2);
                const visOrcadoMD = orcadoMD === 0 ? "-" : (Number.isInteger(orcadoMD) ? orcadoMD : orcadoMD.toFixed(2));
                const visSobra = Number.isInteger(sobra) ? sobra : sobra.toFixed(2);

                linhasSobras += `
                    <tr class="border-b border-purple-800/30 hover:bg-purple-900/20 transition-colors">
                        <td class="py-3 px-3 font-mono text-[13px] text-slate-400 w-24 align-top">${cod}</td>
                        <td class="py-3 px-3 text-[13px] text-purple-100 whitespace-normal align-top leading-relaxed">${saldoBaixado[cod].desc}</td>
                        <td class="py-3 px-3 text-center align-top w-24">${badgeTipo}</td>
                        <td class="py-3 px-3 text-[14px] font-bold text-teal-400 text-center w-24 align-top">${visTotalBaixado}</td>
                        <td class="py-3 px-3 text-[14px] font-bold text-orange-400 text-center w-24 align-top">${visOrcadoMD}</td>
                        <td class="py-3 px-3 text-[14px] font-bold text-purple-300 text-center w-24 align-top">${visSobra}</td>
                        <td class="py-3 px-3 text-center w-32 align-top"><span class="${classSobra} text-white px-2.5 py-1 rounded text-[10px] font-bold uppercase shadow-sm">${statusSobra}</span></td>
                    </tr>
                `;
            }
        });
    });

    let cardSobras = '';
    if (linhasSobras !== '') {
        cardSobras = `
            <div class="bg-cardBg border border-purple-700/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.15)] mb-6 animate-[fadeIn_0.5s_ease-out]">
                <div class="bg-purple-900/30 border-b border-purple-800/50 p-4 flex justify-between items-center">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-lg bg-purple-900/50 flex items-center justify-center border border-purple-700/50"><i class="fas fa-boxes text-purple-400 text-lg"></i></div>
                        <div>
                            <h4 class="text-purple-300 font-bold text-sm tracking-wide uppercase">Materiais Movimentados no Previsto</h4>
                            <p class="text-[11px] text-purple-400/80 mt-0.5">Estes itens foram baixados nesta obra, mas excederam a quantidade orçada ou não foram medidos.</p>
                        </div>
                    </div>
                </div>
                <div class="p-0">
                    <table class="w-full text-left border-collapse table-fixed">
                        <thead class="bg-purple-900/20">
                            <tr class="text-[10px] uppercase tracking-widest text-purple-300/70 border-b border-purple-800/30">
                                <th class="py-2.5 px-3 w-24">Código</th>
                                <th class="py-2.5 px-3 w-auto">Descrição do Material</th>
                                <th class="py-2.5 px-3 text-center w-24">Tipo</th>
                                <th class="py-2.5 px-3 text-center w-24" title="Total que consta na planilha Previsto">Baixado Total</th>
                                <th class="py-2.5 px-3 text-center w-24" title="Quantidade total orçada/medida nesta obra">Orçado MD</th>
                                <th class="py-2.5 px-3 text-center w-24" title="O que sobrou sem estrutura">Qtd Restante</th>
                                <th class="py-2.5 px-3 text-center w-32">Status</th>
                            </tr>
                        </thead>
                        <tbody>${linhasSobras}</tbody>
                    </table>
                </div>
            </div>
        `;
    }

    container.innerHTML = cardsHTML.reverse().join('') + cardSobras;
}

function efetuarTroca(chaveOriginal, trocasJson) {
    const matOriginal = materiaisConsolidados[chaveOriginal]; if(!matOriginal) return;
    const trocas = JSON.parse(decodeURIComponent(trocasJson)); let totalTrocado = 0; trocas.forEach(t => totalTrocado += t.qtd);
    matOriginal.qtdTotal -= totalTrocado; if(matOriginal.qtdTotal < 0.001) matOriginal.qtdTotal = 0;

    const idTroca = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    if(!matOriginal.trocasAtivas) matOriginal.trocasAtivas = [];
    matOriginal.trocasAtivas.push({ id: idTroca, qtdOriginalTrocada: totalTrocado, itensSubstitutos: trocas });

    trocas.forEach(t => {
        let descSubstituto = t.desc || (bancoDeSaldos[t.cod] && bancoDeSaldos[t.cod].desc ? bancoDeSaldos[t.cod].desc : `Substituto (${t.cod})`);
        adicionarAoConsolidado(t.cod, descSubstituto, t.qtd, matOriginal.tipo, chaveOriginal);
    });
    atualizarTelas();
}

function reverterTroca(chaveOriginal, idTroca) {
    const matOriginal = materiaisConsolidados[chaveOriginal]; if(!matOriginal || !matOriginal.trocasAtivas) return;
    const index = matOriginal.trocasAtivas.findIndex(t => t.id === idTroca); if(index === -1) return;
    const troca = matOriginal.trocasAtivas[index];
    
    troca.itensSubstitutos.forEach(t => {
        const chaveNova = `${t.cod}_${matOriginal.tipo}_SUB_${chaveOriginal}`;
        if(materiaisConsolidados[chaveNova]) { materiaisConsolidados[chaveNova].qtdTotal -= t.qtd; if(materiaisConsolidados[chaveNova].qtdTotal <= 0.001) delete materiaisConsolidados[chaveNova]; }
    });
    matOriginal.qtdTotal += troca.qtdOriginalTrocada; matOriginal.trocasAtivas.splice(index, 1); atualizarTelas();
}

function renderizarTabelaConsolidada() {
    const tbody = document.getElementById('tbody-consolidado'); if(!tbody) return; tbody.innerHTML = ""; 
    const chaves = Object.keys(materiaisConsolidados);
    if (chaves.length === 0) { tbody.innerHTML = `<tr><td colspan="7" class="py-16 text-center text-slate-500 italic"><i class="fas fa-box-open text-4xl mb-4 opacity-30 block"></i>Adicione itens no Catálogo.</td></tr>`; return; }

    const depositoParaAnalise = document.getElementById('select-deposito-analise').value;
    const oDep = depositoParaAnalise === '2161' ? '2165' : '2161';

    chaves.sort((a,b) => {
        const mA = materiaisConsolidados[a]; const mB = materiaisConsolidados[b];
        const descA = mA.isSubstituto && materiaisConsolidados[mA.parentChave] ? materiaisConsolidados[mA.parentChave].desc + "_Z_" + mA.desc : mA.desc;
        const descB = mB.isSubstituto && materiaisConsolidados[mB.parentChave] ? materiaisConsolidados[mB.parentChave].desc + "_Z_" + mB.desc : mB.desc;
        return String(descA).localeCompare(String(descB));
    }).forEach(chave => {
        const mat = materiaisConsolidados[chave];
        if(mat.qtdTotal <= 0.001 && (!mat.trocasAtivas || mat.trocasAtivas.length === 0)) return;
        
        const tr = document.createElement('tr'); tr.className = "hover:bg-slate-800/30 transition-colors border-b border-slate-800/50";
        const qVis = mat.qtdTotal <= 0.001 ? "0" : (Number.isInteger(mat.qtdTotal) ? mat.qtdTotal : mat.qtdTotal.toFixed(2).replace('.', ','));
        const bT = mat.tipo === 'OPERACIONAL' ? '<div class="inline-flex items-center justify-center bg-blue-900/30 text-blue-400 px-3 py-1 rounded text-[10px] font-bold tracking-wider border border-blue-800/50 whitespace-nowrap min-w-[85px]">OPERACIONAL</div>' : '<div class="inline-flex items-center justify-center bg-red-900/30 text-red-400 px-3 py-1 rounded text-[10px] font-bold tracking-wider border border-red-800/50 whitespace-nowrap min-w-[85px]">SUCATA</div>';
        
        const s = bancoDeSaldos[mat.codigo] || { "2161": 0, "2165": 0 };
        const s2161 = Number.isInteger(s["2161"]) ? s["2161"] : s["2161"].toFixed(2).replace('.', ',');
        const s2165 = Number.isInteger(s["2165"]) ? s["2165"] : s["2165"].toFixed(2).replace('.', ',');
        const c2161 = s["2161"] === 0 ? "text-slate-600" : "text-slate-300"; const c2165 = s["2165"] === 0 ? "text-slate-600" : "text-slate-300";

        let bInt = '';
        if (!mat.isSubstituto && mat.tipo === 'OPERACIONAL' && mat.qtdTotal > 0.001) {
            const sO = s[depositoParaAnalise] || 0;
            if (mat.qtdTotal > sO + 0.01) {
                const faltaLocal = mat.qtdTotal - sO; const sOutro = s[oDep] || 0; let resolvidoDePara = false;
                const subs = bancoDePara[mat.codigo] || [];
                
                if (subs.length > 0) {
                    let ideal = null; 
                    for (const sb of subs) { const sS = bancoDeSaldos[sb.cod] ? (bancoDeSaldos[sb.cod][depositoParaAnalise] || 0) : 0; if (sS >= faltaLocal) { ideal = { ...sb, saldo: sS }; break; } }
                    if (ideal) {
                        resolvidoDePara = true; const tJ = encodeURIComponent(JSON.stringify([{ cod: ideal.cod, desc: ideal.desc, qtd: faltaLocal }]));
                        bInt += `<div class="mt-2 flex xl:items-center justify-between bg-orange-900/20 border border-orange-800/50 p-2 rounded gap-2"><span class="text-[10px] text-orange-400 font-medium"><i class="fas fa-exclamation-circle mr-1"></i> Faltam <b>${faltaLocal.toFixed(2).replace(/\.00$/,'')}</b> no Dep ${depositoParaAnalise}. Sugestão: <b>${ideal.cod}</b> (Est: ${ideal.saldo}).</span><button type="button" onclick="efetuarTroca('${chave}', '${tJ}')" class="bg-orange-600 hover:bg-orange-500 text-white text-[9px] font-bold px-2.5 py-1.5 rounded transition-colors whitespace-nowrap"><i class="fas fa-exchange-alt mr-1"></i> Aprovar</button></div>`;
                    } else {
                        let fR = faltaLocal; let comb = []; 
                        for (const sb of subs) { const sS = bancoDeSaldos[sb.cod] ? (bancoDeSaldos[sb.cod][depositoParaAnalise] || 0) : 0; if (sS > 0) { const u = Math.min(sS, fR); comb.push({ cod: sb.cod, desc: sb.desc, qtd: u }); fR -= u; if (fR <= 0.01) break; } }
                        if (fR <= 0.01) {
                            resolvidoDePara = true; const textoCombo = comb.map(c => `<b>${c.qtd.toFixed(2).replace(/\.00$/,'')}x</b> [${c.cod}]`).join(' e '); const tJ = encodeURIComponent(JSON.stringify(comb));
                            bInt += `<div class="mt-2 flex xl:items-center justify-between bg-teal-900/20 border border-teal-800/50 p-2 rounded gap-2"><span class="text-[10px] text-teal-400 font-medium"><i class="fas fa-puzzle-piece mr-1"></i> Combo DE-PARA: ${textoCombo}</span><button type="button" onclick="efetuarTroca('${chave}', '${tJ}')" class="bg-teal-600 hover:bg-teal-500 text-white text-[9px] font-bold px-2.5 py-1.5 rounded transition-colors whitespace-nowrap">Combo Múltiplo</button></div>`;
                        }
                    }
                }

                if (!resolvidoDePara) {
                    if (sOutro >= faltaLocal) { bInt += `<div class="mt-2 flex items-center bg-blue-900/20 border border-blue-800/50 p-2 rounded gap-2"><span class="text-[10px] text-blue-400 font-medium"><i class="fas fa-info-circle mr-1"></i> Faltam <b>${faltaLocal.toFixed(2).replace(/\.00$/,'')}</b> no Dep ${depositoParaAnalise}. Mas o <b>Dep ${oDep}</b> possui <b>${sOutro}</b> em estoque.</span></div>`; } 
                    else if (sOutro > 0 && sOutro < faltaLocal) { bInt += `<div class="mt-2 flex items-center bg-blue-900/20 border border-blue-800/50 p-2 rounded gap-2"><span class="text-[10px] text-blue-400 font-medium"><i class="fas fa-info-circle mr-1"></i> Faltam <b>${faltaLocal.toFixed(2).replace(/\.00$/,'')}</b> no Dep ${depositoParaAnalise}. O <b>Dep ${oDep}</b> tem apenas <b>${sOutro}</b>. Baixa pendente.</span></div>`; } 
                    else { bInt += `<div class="mt-2 flex items-center bg-red-900/20 border border-red-800/50 p-2 rounded"><span class="text-[10px] text-red-400 font-medium"><i class="fas fa-times-circle mr-1"></i> <b>Material Pendente de Baixa.</b> Sem estoque e sem opções de substituição.</span></div>`; }
                }
            }
        }

        if (mat.trocasAtivas && mat.trocasAtivas.length > 0) {
            mat.trocasAtivas.forEach(t => {
                const detalhes = t.itensSubstitutos.map(sub => `<b>${sub.qtd.toFixed(2).replace(/\.00$/,'')}x</b> [${sub.cod}]`).join(' e ');
                bInt += `<div class="mt-2 flex xl:items-center justify-between bg-green-900/10 border border-green-800/40 p-2 rounded gap-2"><span class="text-[10px] text-green-400 font-medium"><i class="fas fa-check-circle mr-1"></i> ✅ Substituiu <b>${t.qtdOriginalTrocada.toFixed(2).replace(/\.00$/,'')}</b> originais por: ${detalhes}</span><button type="button" onclick="reverterTroca('${chave}', '${t.id}')" class="bg-darkBg border border-green-700/50 hover:bg-green-900/50 hover:border-green-500 text-green-400 text-[9px] font-bold px-2 py-1 rounded transition-all whitespace-nowrap"><i class="fas fa-undo-alt mr-1"></i> Reverter</button></div>`;
            });
        }

        const isSubsVis = mat.qtdTotal <= 0.001 && mat.trocasAtivas && mat.trocasAtivas.length > 0;
        const rowOpacity = isSubsVis ? 'opacity-60 bg-darkBg/50' : '';
        const prefixoFilho = mat.isSubstituto ? `<span class="text-orange-500 font-bold mr-2 text-base opacity-70">↳</span>` : ``;

        tr.innerHTML = `
            <td class="py-3.5 px-4 font-mono text-slate-400 text-[13px] w-24 align-top truncate ${rowOpacity}" title="${mat.codigo}">${mat.codigo}</td>
            <td class="py-3.5 px-4 w-auto align-top"><div class="flex items-start">${prefixoFilho}<div class="flex-1 w-full overflow-hidden"><div class="text-white text-[13px] truncate max-w-[200px] lg:max-w-[400px] xl:max-w-[600px] ${rowOpacity}" title="${mat.desc}">${mat.desc}</div>${bInt}</div></div></td>
            <td class="py-3.5 px-4 text-center w-28 align-top ${rowOpacity}">${bT}</td>
            <td class="py-3.5 px-3 text-center font-mono ${c2161} bg-darkBg/10 border-l border-slate-800/50 w-24 align-top ${rowOpacity}">${s2161}</td>
            <td class="py-3.5 px-3 text-center font-mono ${c2165} bg-darkBg/10 border-r border-slate-800/50 w-24 align-top ${rowOpacity}">${s2165}</td>
            <td class="py-3.5 px-4 text-center font-bold text-base text-orange-400 bg-darkBg/30 border-l border-r border-slate-800/80 w-28 align-top ${rowOpacity}">${qVis}</td>
            <td class="py-3.5 px-4 text-center w-16 align-top"><button type="button" onclick="removerMaterialLinha('${chave}')" class="text-slate-500 hover:text-danger bg-darkBg hover:bg-danger/10 border border-transparent hover:border-danger/30 p-1.5 rounded transition-all" title="Remover"><i class="fas fa-trash-alt"></i></button></td>
        `; tbody.appendChild(tr);
    });
}

function removerMaterialLinha(chave) {
    const mat = materiaisConsolidados[chave];
    let msg = `Deseja remover o material "${mat.codigo}" da lista consolidada? (O lançamento no histórico ficará quebrado)`;
    if(mat.trocasAtivas && mat.trocasAtivas.length > 0) msg = `ATENÇÃO: Este material possui substituições. Ao remover, os itens filhos também sumirão. Confirmar?`;
    if(confirm(msg)) {
        if (mat.trocasAtivas && mat.trocasAtivas.length > 0) {
            mat.trocasAtivas.forEach(t => { t.itensSubstitutos.forEach(s => { const cN = `${s.cod}_${mat.tipo}_SUB_${chave}`; if(materiaisConsolidados[cN]) { materiaisConsolidados[cN].qtdTotal -= s.qtd; if(materiaisConsolidados[cN].qtdTotal <= 0.001) delete materiaisConsolidados[cN]; } }); });
        }
        delete materiaisConsolidados[chave]; atualizarTelas();
    }
}

function renderizarAcompanhamento() {
    const tbody = document.getElementById('tbody-acompanhamento'); if (!tbody) return; tbody.innerHTML = "";
    const iOR = document.getElementById('input-numero-obra').value.trim().toUpperCase(); const nO = iOR.replace(/[^A-Z0-9-]/g, '').replace(/^0+/, '');
    const chaves = Object.keys(materiaisConsolidados);
    const dO = bancoPrevisto[nO] || {};
    
    if (chaves.length === 0 && Object.keys(dO).length === 0 && nO) { 
        tbody.innerHTML = `<tr><td colspan="7" class="py-16 text-center text-slate-500 italic"><i class="fas fa-tasks text-4xl mb-4 opacity-30 block"></i>Nenhum material orçado e nenhum baixado nesta obra.</td></tr>`; return; 
    }
    if (!nO) { 
        tbody.innerHTML = `<tr><td colspan="7" class="py-16 text-center text-orange-400 italic bg-orange-900/10"><i class="fas fa-hashtag text-4xl mb-4 opacity-50 block"></i>Digite o <b>NÚMERO DA OBRA</b> no topo para auditar.</td></tr>`; return; 
    }

    const tIM = new Map();
    chaves.forEach(chave => {
        const mat = materiaisConsolidados[chave]; const mK = `${mat.codigo}_${mat.tipo}`;
        if(tIM.has(mK)) { tIM.get(mK).orcado += mat.qtdTotal; } 
        else { tIM.set(mK, { codigo: mat.codigo, tipo: mat.tipo, desc: mat.desc, orcado: mat.qtdTotal }); }
    });

    Object.keys(dO).forEach(cod => {
        const mB = dO[cod];
        if (mB.OPERACIONAL > 0) { const c = `${cod}_OPERACIONAL`; if (!tIM.has(c)) tIM.set(c, { codigo: cod, tipo: 'OPERACIONAL', desc: mB.desc, orcado: 0 }); }
        if (mB.SUCATA > 0) { const c = `${cod}_SUCATA`; if (!tIM.has(c)) tIM.set(c, { codigo: cod, tipo: 'SUCATA', desc: mB.desc, orcado: 0 }); }
    });
    
    Array.from(tIM.values()).sort((a, b) => String(a.desc).localeCompare(String(b.desc))).forEach(item => {
        const baixado = dO[item.codigo] ? (dO[item.codigo][item.tipo] || 0) : 0;
        const saldoABaixar = item.orcado - baixado;
        
        let alertasHTML = '';
        if (item.orcado > 0 && baixado === 0) {
            const subs = bancoDePara[item.codigo] || [];
            subs.forEach(s => {
                const bSub = dO[s.cod] ? (dO[s.cod][item.tipo] || 0) : 0;
                if (bSub > 0) {
                    alertasHTML += `<div class="mt-1.5 border border-blue-800/40 bg-blue-900/20 text-blue-400 px-2 py-1 rounded text-[9px] font-bold">
                        <i class="fas fa-info-circle mr-1"></i> Sugestão: Existem ${bSub}x do item [${s.cod}] já baixados que substituem este item.
                    </div>`;
                }
            });
        }
        if (item.orcado === 0 && baixado > 0) {
            Object.keys(bancoDePara).forEach(codOriginal => {
                if (bancoDePara[codOriginal].some(s => s.cod === item.codigo)) {
                    const orcadoOriginal = Array.from(tIM.values()).find(x => x.codigo === codOriginal && x.tipo === item.tipo && x.orcado > 0);
                    if (orcadoOriginal) {
                        alertasHTML += `<div class="mt-1.5 border border-purple-800/40 bg-purple-900/20 text-purple-400 px-2 py-1 rounded text-[9px] font-bold">
                            <i class="fas fa-exchange-alt mr-1"></i> Este item substitui o material [${codOriginal}] orçado nesta obra.
                        </div>`;
                    }
                }
            });
        }

        const orcadoVis = item.orcado === 0 ? "-" : (Number.isInteger(item.orcado) ? item.orcado : item.orcado.toFixed(2).replace('.', ','));
        const baixadoVis = baixado === 0 ? "-" : (Number.isInteger(baixado) ? baixado : baixado.toFixed(2).replace('.', ','));
        const saldoVis = Number.isInteger(saldoABaixar) ? saldoABaixar : saldoABaixar.toFixed(2).replace('.', ',');

        let statusHTML = ''; let rowExtraClass = '';
        if (item.orcado === 0 && baixado > 0) { statusHTML = `<span class="bg-purple-600 text-white px-2 py-1 rounded text-[9px] font-bold uppercase shadow-sm">NÃO MEDIDO</span>`; rowExtraClass = 'bg-purple-900/10 hover:bg-purple-900/20'; } 
        else if (saldoABaixar > 0.01) { statusHTML = `<span class="bg-orange-600 text-white px-2 py-1 rounded text-[9px] font-bold uppercase shadow-sm">RMA</span>`; } 
        else if (saldoABaixar < -0.01) { statusHTML = `<span class="bg-red-600 text-white px-2 py-1 rounded text-[9px] font-bold uppercase shadow-sm">DMA</span>`; rowExtraClass = 'bg-red-900/10 hover:bg-red-900/20'; }
        else { statusHTML = `<span class="bg-green-600 text-white px-2 py-1 rounded text-[9px] font-bold uppercase shadow-sm">OK</span>`; }

        const badgeTipo = item.tipo === 'OPERACIONAL' ? '<div class="bg-blue-600 text-white px-2 py-1 rounded text-[9px] font-bold min-w-[85px] text-center">OPERACIONAL</div>' : '<div class="bg-red-600 text-white px-2 py-1 rounded text-[9px] font-bold min-w-[85px] text-center">SUCATA</div>';

        const tr = document.createElement('tr'); tr.className = `transition-colors border-b border-slate-800/50 ${rowExtraClass ? rowExtraClass : 'hover:bg-slate-800/30'}`;
        tr.innerHTML = `<td class="py-2.5 px-3 font-mono text-slate-400 text-[12px] w-20 align-middle">${item.codigo}</td><td class="py-2.5 px-3 text-white text-[12px] w-auto align-middle"><div>${item.desc}</div>${alertasHTML}</td><td class="py-2.5 px-3 text-center w-24 align-middle">${badgeTipo}</td><td class="py-2.5 px-3 text-center font-bold text-sm text-orange-400 bg-darkBg/20 border-l border-slate-800/80 w-20 align-middle">${orcadoVis}</td><td class="py-2.5 px-3 text-center font-bold text-sm text-teal-400 bg-darkBg/20 w-20 align-middle">${baixadoVis}</td><td class="py-2.5 px-3 text-center font-bold text-sm ${item.orcado === 0 ? 'text-purple-400' : 'text-blue-400'} bg-darkBg/20 border-r border-slate-800/80 w-24 align-middle">${saldoVis}</td><td class="py-2.5 px-3 text-center w-32 align-middle">${statusHTML}</td>`;
        tbody.appendChild(tr);
    });
}

// ==========================================
// EXPORTAÇÕES (EXCEL)
// ==========================================
function exportarExcel() {
    const chaves = Object.keys(materiaisConsolidados);
    if(chaves.length === 0) { alert("O levantamento está vazio."); return; }

    const numeroObraRaw = document.getElementById('input-numero-obra').value.trim().toUpperCase();
    const numeroObra = numeroObraRaw || "N/A";
    const depA = document.getElementById('select-deposito-analise').value;
    
    const mapOperacional = []; const mapSucata = [];
    chaves.forEach(chave => {
        const mat = materiaisConsolidados[chave];
        if(mat.qtdTotal <= 0.001) return;
        
        const linhaExcel = {
            "Nº DA OBRA": numeroObra, "DEPÓSITO": depA, "CÓDIGO": mat.codigo,
            "QUANTIDADE": parseFloat(mat.qtdTotal.toFixed(2)), "DESCRIÇÃO DO MATERIAL": mat.desc
        };
        if (mat.tipo === 'OPERACIONAL') mapOperacional.push(linhaExcel); else mapSucata.push(linhaExcel);
    });

    const workbook = XLSX.utils.book_new();
    if(mapOperacional.length > 0) XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(mapOperacional), "Operacional");
    if(mapSucata.length > 0) XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(mapSucata), "Sucata");
    
    XLSX.writeFile(workbook, `Medicao_${numeroObraRaw || 'Geral'}.xlsx`);
}

function exportarExcelAuditoria() {
    const numeroObraRaw = document.getElementById('input-numero-obra').value.trim().toUpperCase();
    const nO = numeroObraRaw.replace(/[^A-Z0-9-]/g, '').replace(/^0+/, '');
    const chaves = Object.keys(materiaisConsolidados);
    const dO = bancoPrevisto[nO] || {};
    if (chaves.length === 0 && Object.keys(dO).length === 0) { alert("Não há dados."); return; }

    const depA = document.getElementById('select-deposito-analise').value;
    const tIM = new Map();
    chaves.forEach(k => { const mat = materiaisConsolidados[k]; const mK = `${mat.codigo}_${mat.tipo}`; if(tIM.has(mK)) tIM.get(mK).orcado += mat.qtdTotal; else tIM.set(mK, { codigo: mat.codigo, tipo: mat.tipo, desc: mat.desc, orcado: mat.qtdTotal }); });
    Object.keys(dO).forEach(cod => { ['OPERACIONAL', 'SUCATA'].forEach(tipo => { if (dO[cod][tipo] > 0) { const mK = `${cod}_${tipo}`; if (!tIM.has(mK)) tIM.set(mK, { codigo: cod, tipo: tipo, desc: dO[cod].desc, orcado: 0 }); } }); });

    const mapOperacional = []; const mapSucata = [];

    tIM.forEach((item) => {
        const baixado = dO[item.codigo] ? (dO[item.codigo][item.tipo] || 0) : 0;
        const faltaBaixar = item.orcado - baixado;
        const saldo2161 = bancoDeSaldos[item.codigo] ? (bancoDeSaldos[item.codigo]["2161"] || 0) : 0;
        const saldo2165 = bancoDeSaldos[item.codigo] ? (bancoDeSaldos[item.codigo]["2165"] || 0) : 0;
        
        let obsAuditoria = "-";
        if (item.orcado > 0 && baixado === 0) {
            const subs = bancoDePara[item.codigo] || [];
            subs.forEach(s => { const bSub = dO[s.cod] ? (dO[s.cod][item.tipo] || 0) : 0; if (bSub > 0) obsAuditoria = `ATENÇÃO: Foi baixado ${bSub}x do substituto [${s.cod}]`; });
        }

        const linha = {
            "Nº DA OBRA": numeroObraRaw || "N/A",
            "CÓDIGO": item.codigo,
            "DESCRIÇÃO": item.desc,
            "TIPO": item.tipo,
            "ORÇADO (MEDIÇÃO)": parseFloat(item.orcado.toFixed(2)),
            "BAIXADO (SISTEMA)": parseFloat(baixado.toFixed(2)),
            "DIFERENÇA": parseFloat(faltaBaixar.toFixed(2)),
            "ALERTA AUDITORIA": obsAuditoria,
            "SALDO EST. 2161": parseFloat(saldo2161.toFixed(2)),
            "SALDO EST. 2165": parseFloat(saldo2165.toFixed(2))
        };

        if (item.tipo === 'OPERACIONAL') mapOperacional.push(linha); else mapSucata.push(linha);
    });

    const workbook = XLSX.utils.book_new();
    const wsOp = XLSX.utils.json_to_sheet(mapOperacional);
    const wsSu = XLSX.utils.json_to_sheet(mapSucata);
    XLSX.utils.book_append_sheet(workbook, wsOp, "Operacional");
    XLSX.utils.book_append_sheet(workbook, wsSu, "Sucata");
    
    const hist = historicoLancamentos.map(l => ({ "OBRA": numeroObraRaw, "QTD": l.qtdVisor, "NOME": l.nome, "TIPO": l.tipo }));
    const wsHist = XLSX.utils.json_to_sheet(hist);
    XLSX.utils.book_append_sheet(workbook, wsHist, "Histórico Lançado");

    XLSX.writeFile(workbook, `Auditoria_${nO || 'Geral'}.xlsx`);
}

// ==========================================
// EXPORTAR EXCEL DA COMPOSIÇÃO 
// ==========================================
function exportarExcelComposicao() {
    if (historicoLancamentos.length === 0) { alert("Não há lançamentos para exportar."); return; }

    const iOR = document.getElementById('input-numero-obra').value.trim().toUpperCase();
    const nO = iOR.replace(/[^A-Z0-9-]/g, '').replace(/^0+/, '');
    const dO = bancoPrevisto[nO] || {};
    
    // Variável para a nova coluna do Excel
    const numeroObraVisor = iOR || "N/A";

    let saldoBaixado = {};
    Object.keys(dO).forEach(cod => {
        saldoBaixado[cod] = { 
            'OPERACIONAL': dO[cod]['OPERACIONAL'] || 0, 
            'SUCATA': dO[cod]['SUCATA'] || 0,
            'desc': dO[cod].desc || "Descrição indisponível"
        };
    });

    let poolTrocas = {};
    Object.keys(materiaisConsolidados).forEach(chave => {
        const mat = materiaisConsolidados[chave];
        if (mat.trocasAtivas && mat.trocasAtivas.length > 0) {
            poolTrocas[chave] = 0;
            mat.trocasAtivas.forEach(t => { poolTrocas[chave] += t.qtdOriginalTrocada; });
        }
    });

    const dadosExportacao = [];

    historicoLancamentos.forEach(lanc => {
        lanc.itens.forEach(item => {
            const codigoReal = item.chave.split('_')[0];
            const matSalvo = materiaisConsolidados[item.chave];
            const descricao = matSalvo ? matSalvo.desc : "Descrição indisponível";
            const qtdNecessaria = item.qtd;

            let qtdTrocadaAqui = 0;
            if (poolTrocas[item.chave] && poolTrocas[item.chave] > 0) {
                qtdTrocadaAqui = Math.min(qtdNecessaria, poolTrocas[item.chave]);
                poolTrocas[item.chave] -= qtdTrocadaAqui;
            }

            let qtdBaixadaAqui = 0;
            if (saldoBaixado[codigoReal] && saldoBaixado[codigoReal][lanc.tipo] > 0) {
                const disponivel = saldoBaixado[codigoReal][lanc.tipo];
                qtdBaixadaAqui = Math.min(qtdNecessaria - qtdTrocadaAqui, disponivel);
                saldoBaixado[codigoReal][lanc.tipo] -= qtdBaixadaAqui; 
            }

            let atendidoStr = qtdBaixadaAqui.toFixed(2);
            if(qtdTrocadaAqui > 0.01 && qtdBaixadaAqui === 0) atendidoStr = `DE-PARA`;
            else if(qtdTrocadaAqui > 0.01) atendidoStr = `${qtdBaixadaAqui.toFixed(2)} (+${qtdTrocadaAqui.toFixed(2)} DP)`;

            dadosExportacao.push({
                "Nº DA OBRA": numeroObraVisor,
                "GRUPO / ESTRUTURA": lanc.nome,
                "CÓDIGO": codigoReal,
                "DESCRIÇÃO DO MATERIAL": descricao,
                "TIPO": lanc.tipo,
                "QTD NA MD": parseFloat(qtdNecessaria.toFixed(2)),
                "RMA(PREVISTO)": atendidoStr,
                "STATUS": (qtdNecessaria - qtdBaixadaAqui - qtdTrocadaAqui) > 0.01 ? "RMA" : "OK",
                "BAIXADO TOTAL (SISTEMA)": "-",
                "ORÇADO TOTAL (MD)": "-"
            });
        });
    });

    Object.keys(saldoBaixado).forEach(cod => {
        ['OPERACIONAL', 'SUCATA'].forEach(tipo => {
            const sobra = saldoBaixado[cod][tipo];
            if (sobra > 0.001) {
                const totalBaixado = dO[cod] ? (dO[cod][tipo] || 0) : 0;
                const chaveMat = `${cod}_${tipo}`;
                const orcadoMD = materiaisConsolidados[chaveMat] ? materiaisConsolidados[chaveMat].qtdTotal : 0;

                dadosExportacao.push({
                    "Nº DA OBRA": numeroObraVisor,
                    "GRUPO / ESTRUTURA": "MOVIMENTAÇÃO NO PREVISTO",
                    "CÓDIGO": cod,
                    "DESCRIÇÃO DO MATERIAL": saldoBaixado[cod].desc,
                    "TIPO": tipo,
                    "QTD NA MD": "-",
                    "RMA(PREVISTO)": "-",
                    "STATUS": orcadoMD > 0 ? "DMA" : "NÃO MEDIDO",
                    "BAIXADO TOTAL (SISTEMA)": parseFloat(totalBaixado.toFixed(2)),
                    "ORÇADO TOTAL (MD)": orcadoMD > 0 ? parseFloat(orcadoMD.toFixed(2)) : "-"
                });
            }
        });
    });

    // PREPARA OS DADOS DA ABA "MO" (HISTÓRICO LANÇADO) COM Nº DA OBRA
    const dadosMO = historicoLancamentos.map(lanc => {
        return {
            "Nº DA OBRA": numeroObraVisor,
            "ESTRUTURA / MATERIAL AVULSO": lanc.nome,
            "QUANTIDADE": lanc.qtdVisor,
            "TIPO": lanc.tipo
        };
    });

    const workbook = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(dadosExportacao);
    
    // Adicionamos a configuração de largura para a nova coluna (10 colunas no total agora)
    ws['!cols'] = [
        { wch: 15 }, { wch: 30 }, { wch: 15 }, { wch: 60 }, { wch: 15 }, 
        { wch: 18 }, { wch: 18 }, { wch: 15 }, { wch: 22 }, { wch: 18 }
    ];

    XLSX.utils.book_append_sheet(workbook, ws, "Composição Detalhada");
    
    // CRIA E ADICIONA A NOVA ABA "MO"
    if (dadosMO.length > 0) {
        const wsMO = XLSX.utils.json_to_sheet(dadosMO);
        wsMO['!cols'] = [ { wch: 15 }, { wch: 60 }, { wch: 15 }, { wch: 15 } ]; 
        XLSX.utils.book_append_sheet(workbook, wsMO, "MO");
    }

    XLSX.writeFile(workbook, `Composicao_Obra_${nO || 'Geral'}.xlsx`);
}

// ==========================================
// EXPORTAÇÃO GLOBAL (LIGA O JS COM O HTML)
// ==========================================
window.abrirLevantamento = abrirLevantamento;
window.voltarMenu = voltarMenu;
window.mudarAbaDireita = mudarAbaDireita;
window.mudarQtdVitrine = mudarQtdVitrine;
window.renderizarVitrine = renderizarVitrine;
window.inserirDaVitrine = inserirDaVitrine;
window.removerDoHistorico = removerDoHistorico;
window.efetuarTroca = efetuarTroca;
window.reverterTroca = reverterTroca;
window.renderizarTabelaConsolidada = renderizarTabelaConsolidada;
window.removerMaterialLinha = removerMaterialLinha;
window.renderizarAcompanhamento = renderizarAcompanhamento;
window.limparLevantamento = limparLevantamento;
window.exportarExcel = exportarExcel;
window.exportarExcelAuditoria = exportarExcelAuditoria;
window.renderizarVisaoEstruturas = renderizarVisaoEstruturas;
window.exportarExcelComposicao = exportarExcelComposicao;
window.atualizarTelas = atualizarTelas;
window.mudarAbaVitrine = mudarAbaVitrine;