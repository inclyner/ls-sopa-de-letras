////@ts-check

import { useEffect } from "react";
import { useState } from "react";
import shuffleArray from "../helpers/shuffleArray";

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "X",
  "W",
  "Y",
  "Z",
];
const arrOfWordsBasic = [
  "AMOR",
  "CALMA",
  "PESCA",
  "PARIR",
  "CARRO",
  "FUI",
  "RUIVA",
  "CRIME",
  "LER",
  "BOCA",
  "MUSEU",
  "PRATO",
  "FACA",
  "REAL",
  "CEM",
  "BAIXO",
  "MARÉ",
  "UNIR",
  "RINS",
  "TUBO",
  "TRAJE",
  "MODO",
  "QUEIMA",
  "SORTE",
  "MAR",
  "OVO",
  "OSSO",
  "ALA",
  "LUZ",
  "ZONA",
  "DIZ",
  "PAUSA",
  "OLHO",
  "POSE",
  "VIDA",
  "CASA",
  "SOAR",
  "TOLO",
  "COXO",
  "PARA",
  "TUDO",
  "DARDO",
  "CEDO",
  "LOGO",
  "CUJO",
  "AZUL",
  "DOCE",
  "BASE",
  "NOJO",
  "CASA",
];
const arrOfWordsMedium = [
  "AMOR",
  "CALMA",
  "PESCAR",
  "ÓCULOS",
  "IGREJA",
  "EMPATIA",
  "RUIVA",
  "CRIME",
  "ENSINO",
  "MEMÓRIA",
  "MUSEU",
  "PRATO",
  "CORRIDA",
  "NATAÇÃO",
  "ANIMAIS",
  "GENUÍNO",
  "ATLETA",
  "COLUNA",
  "RINS",
  "TUBO",
  "TRAJE",
  "FRESCA",
  "QUEIMA",
  "SORTE",
  "SANGUE",
  "OVO",
  "LAVAGEM",
  "TRIPLO",
  "LUZES",
  "AXILA",
  "DESFILE",
  "PAUSA",
  "PERFUME",
  "OCUPADO",
  "CIGANO",
  "CALDEIRA",
  "HISTÓRIA",
  "PIADA",
  "POESIA",
  "TORNADO",
  "MORSA",
  "DARDO",
  "INFERIR",
  "FURIOSO",
  "ORGÃO",
  "AZUL",
  "ESTÁGIO",
  "VENTOSA",
  "AMARELO",
  "CASA",
];
const arrOfWordsHard = [
  "MISÓGINO",
  "ORGANIZAR",
  "PESCAR",
  "ÓCULOS",
  "IGREJA",
  "VERMELHO",
  "RESPEITO",
  "ESSÊNCIA",
  "ENSINO",
  "MEMÓRIA",
  "DESGRAÇA",
  "PRUDENTE",
  "CORRIDA",
  "NATAÇÃO",
  "ANIMAIS",
  "CONCEITO",
  "REITERAR",
  "COLUNA",
  "TALARICO",
  "CONSERTO",
  "RELATIVO",
  "ANALOGIA",
  "QUEIMA",
  "MODÉSTIA",
  "SANGUE",
  "DISTINTO",
  "LAVAGEM",
  "TRIPLO",
  "LUZES",
  "DESPEITO",
  "DESFILE",
  "FOMENTAR",
  "PERFUME",
  "OCUPADO",
  "CIGANO",
  "CALDEIRA",
  "HISTÓRIA",
  "PIADA",
  "POESIA",
  "TORNADO",
  "ESPECTRO",
  "CONTEXTO",
  "CATEDRAL",
  "FURIOSO",
  "OBSTANTE",
  "PROCESSO",
  "ESTÁGIO",
  "VENTOSA",
  "AMARELO",
  "VOCÁBULO",
];

/**
 *
 * @param {*} numberOfWords
 * @param {*} tamTabuleiro
 * @param {*} palavrasBaralhadas
 * @returns
 */
function handleVector(numberOfWords, tamTabuleiro, palavrasBaralhadas) {
  let ArrayLetters = [];
  for (let i = 0; i < tamTabuleiro; i++) {
    ArrayLetters.push("*");
  }

  let contaPalavras = 0;
  let posX = 0,posY = 0, pos = 0;
  let aux;
  let auxContaLetras = 0;
  let rowSize = Math.sqrt(tamTabuleiro);
  let j;
  while (contaPalavras !== numberOfWords){
    const initialPos = Math.floor(Math.random() * tamTabuleiro);
    const direction = Math.floor(Math.random() * 8); //direções:
    switchdirecao: switch (direction) {
      case 0: //implementado e testado
        posX = initialPos % rowSize;
        posY = Math.floor(initialPos / rowSize) + 1;
        aux = palavrasBaralhadas[contaPalavras];
        auxContaLetras = 0;
        j = 0;

        if (aux.length > posY || aux.length > posX) break switchdirecao;
        for (
          let i = initialPos;
          i >= initialPos - (rowSize + 1) * (aux.length - 1) && j <= aux.length;
          i = i - rowSize - 1
        ) {
          if (ArrayLetters[i] !== "*" && ArrayLetters[i] !== aux[j]) {
            break switchdirecao;
          } else {
            auxContaLetras++;
          }
          j++;
        }

        auxContaLetras = 0;
        for (
          let i = initialPos;
          i >= initialPos - (rowSize + 1) * (aux.length - 1) &&
          auxContaLetras < aux.length;
          i = i - rowSize - 1
        ) {
          ArrayLetters[i] = aux[auxContaLetras];
          auxContaLetras++;
        }
        contaPalavras++;
        break;

      case 1: //implementado e testado
        pos = Math.floor(initialPos / rowSize) + 1;
        aux = palavrasBaralhadas[contaPalavras];
        auxContaLetras = 0;
        if (aux.length > pos) break switchdirecao;

        j = aux.length;
        for (
          let i = initialPos;
          i >= initialPos - aux.length * (rowSize - 1) && j >= 0;
          i = i - rowSize
        ) {
          if (ArrayLetters[i] !== "*" && ArrayLetters[i] !== aux[j]) {
            break switchdirecao;
          } else {
            auxContaLetras++;
          }
          j--;
        }
        auxContaLetras = 0;
        for (
          let i = initialPos;
          i >= initialPos - aux.length * rowSize && auxContaLetras < aux.length;
          i = i - rowSize
        ) {
          ArrayLetters[i] = aux[auxContaLetras];
          auxContaLetras++;
        }
        contaPalavras++;

        break;

      case 2: //implementado e testado
        auxContaLetras = 0;
        posX = rowSize - (initialPos % rowSize);
        posY = Math.floor(initialPos / rowSize) + 1;
        aux = palavrasBaralhadas[contaPalavras];
        if (aux.length > posY || aux.length > posX) break switchdirecao;
        j = 0;
        for (
          let i = initialPos;
          i >= initialPos - (rowSize - 1) * (aux.length - 1) && j <= aux.length;
          i = i - rowSize + 1
        ) {
          if (ArrayLetters[i] !== "*" && ArrayLetters[i] !== aux[j]) {
            break switchdirecao;
          } else {
            auxContaLetras++;
          }
          j++;
        }
        auxContaLetras = 0;
        for (
          let i = initialPos;
          i >= initialPos - (rowSize - 1) * (aux.length - 1) &&
          auxContaLetras < aux.length;
          i = i - rowSize + 1
        ) {
          ArrayLetters[i] = aux[auxContaLetras];
          auxContaLetras++;
        }
        contaPalavras++;

        break;

      case 3: //implementado e testado
        pos = rowSize - (initialPos % rowSize);
        aux = palavrasBaralhadas[contaPalavras];
        auxContaLetras = 0;

        if (aux.length > pos) break switchdirecao;
        j = 0;
        // verifica se a palavra pode ser colocada
        for (
          let i = initialPos;
          i <= initialPos + pos && j <= aux.length;
          i++
        ) {
          if (i - j === initialPos) {
            if (ArrayLetters[i] !== "*" && ArrayLetters[i] !== aux[j]) {
              break switchdirecao;
            } else {
              auxContaLetras++;
            }
          }
          j++;
        }

        auxContaLetras = 0;
        for (
          let i = initialPos;
          i <= initialPos + pos && auxContaLetras < aux.length;
          i++
        ) {
          ArrayLetters[i] = aux[auxContaLetras];
          auxContaLetras++;
        }
        contaPalavras++;

        break;

      case 4: //implementado e testado
        auxContaLetras = 0;
        posX = initialPos % rowSize;
        posY = rowSize - Math.floor(initialPos / rowSize);
        aux = palavrasBaralhadas[contaPalavras];

        if (aux.length > posY || aux.length > posX) break switchdirecao;
        j = 0;
        for (
          let i = initialPos;
          i <= initialPos + (rowSize + 1) * (aux.length - 1) && j <= aux.length;
          i = i - rowSize + 1
        ) {
          if (ArrayLetters[i] !== "*" && ArrayLetters[i] !== aux[j]) {
            break switchdirecao;
          } else {
            auxContaLetras++;
          }
          j++;
        }

        auxContaLetras = 0;
        for (
          let i = initialPos;
          i <= initialPos + (rowSize + 1) * (aux.length - 1) &&
          auxContaLetras < aux.length;
          i = i + rowSize - 1
        ) {
          ArrayLetters[i] = aux[auxContaLetras];
          auxContaLetras++;
        }
        contaPalavras++;
        break;

      case 5: //implementado e testado
        pos = rowSize - Math.floor(initialPos / rowSize) + 1;
        aux = palavrasBaralhadas[contaPalavras];
        auxContaLetras = 0;

        if (aux.length > pos) break switchdirecao;
        j = 0;
        for (
          let i = initialPos;
          i <= initialPos + aux.length * rowSize && j <= aux.length;
          i = i + rowSize
        ) {
          if (ArrayLetters[i] !== "*" && ArrayLetters[i] !== aux[j]) {
            break switchdirecao;
          } else {
            auxContaLetras++;
          }
          j++;
        }
        auxContaLetras = 0;
        for (
          let i = initialPos;
          i <= initialPos + aux.length * rowSize && auxContaLetras < aux.length;
          i = i + rowSize
        ) {
          ArrayLetters[i] = aux[auxContaLetras];
          auxContaLetras++;
        }
        contaPalavras++;

        break;

      case 6: //implementado e testado
        auxContaLetras = 0;
        posX = initialPos % rowSize;
        posY = rowSize - Math.floor(initialPos / rowSize);
        aux = palavrasBaralhadas[contaPalavras];

        if (aux.length > posY || aux.length > posX) break switchdirecao;
        j = 0;

        for (
          let i = initialPos;
          i <= initialPos + (rowSize - 1) * (aux.length - 1) && j <= aux.length;
          i = i + rowSize - 1
        ) {
          if (ArrayLetters[i] !== "*" && ArrayLetters[i] !== aux[j]) {
            break switchdirecao;
          } else {
            auxContaLetras++;
          }
          j++;
        }

        auxContaLetras = 0;
        for (
          let i = initialPos;
          i <= initialPos + (rowSize - 1) * (aux.length - 1) &&
          auxContaLetras < aux.length;
          i = i + rowSize - 1
        ) {
          ArrayLetters[i] = aux[auxContaLetras];
          auxContaLetras++;
        }
        contaPalavras++;
        break;

      case 7: //implementado e testado
        pos = initialPos % rowSize;
        aux = palavrasBaralhadas[contaPalavras];
        auxContaLetras = 0;
        if (aux.length > pos) break switchdirecao;

        // verifica se a palavra pode ser colocada
        for (let i = initialPos; i >= initialPos - pos; i--) {
          for (let j = aux.length; j >= 0; j--) {
            //truque é dar o número da linha
            if ((i - j) % rowSize === 0) {
              if (
                ArrayLetters[i] !== "*" &&
                ArrayLetters[i] !== aux[auxContaLetras]
              )
                break switchdirecao;
              else auxContaLetras++;
            }
          }
        }

        //coloca a palavra até chegar ao fim da palavra
        auxContaLetras = 0;
        for (
          let i = initialPos;
          i >= initialPos - pos && auxContaLetras < aux.length;
          i--
        ) {
          ArrayLetters[i] = aux[auxContaLetras];
          auxContaLetras++;
        }
        contaPalavras++;
        break;
    }
  }

  //Preenche o tab com letras aleatórias
  for (let j = 0; j < ArrayLetters.length; j++) {
    if (ArrayLetters[j] === "*")
      ArrayLetters[j] = letters[Math.floor(Math.random() * letters.length)];
  }
  return ArrayLetters;
}

const INITIAL_STATE = {
  gameClass: "",
  sizeTab: 0,
  arrOfWords: [],
  ArrayLetters: [],
  list: [],
  matchedWord: [],
  word: [],
  indexList:[],
  contaPalavras: 0
};

const GamePanel = ({ numOfWords, selectedLevel, gameStarted, onGameStart, updatePoints }) => {
  const [gameClass, setGameClass] = useState(INITIAL_STATE.gameClass);
  const [sizeTab, setSizeTab] = useState(INITIAL_STATE.sizeTab);
  const [arrOfWords, setArrWords] = useState(INITIAL_STATE.arrOfWords);
  const [ArrayLetters, setArrayLetters] = useState(INITIAL_STATE.ArrayLetters);
  const [list, setList] = useState(INITIAL_STATE.list);
  const [matchedWord, setMatchedWord] = useState(INITIAL_STATE.matchedWord);
  const [word, setWord] = useState(INITIAL_STATE.word);
  const [indexList, setIndexList] = useState(INITIAL_STATE.indexList);
  const [contaPalavras, setContaPalavras] = useState(INITIAL_STATE.contaPalavras);
  
  const [palavra, setPalavra] = useState("");

  let indexSelected = [];
  let indexSelectedCerta = [];
  let contadorPalavrasMatched;

  

  useEffect(
    function () {
      let newSizeTab, newArrWords, newGameClass;

      if (selectedLevel === "1") {
        newSizeTab = 100;
        newGameClass = "basico";
        newArrWords = arrOfWordsBasic;
      } else if (selectedLevel === "2") {
        newSizeTab = 144;
        newGameClass = "intermedio";
        newArrWords = arrOfWordsMedium;
      } else if (selectedLevel === "3") {
        newSizeTab = 196;
        newGameClass = "avancado";
        newArrWords = arrOfWordsHard;
      } else {
        newGameClass = INITIAL_STATE.gameClass;
        newSizeTab = INITIAL_STATE.sizeTab;
        newArrWords = INITIAL_STATE.arrOfWords;
      }
      setArrWords(newArrWords);
      setGameClass(newGameClass);
      setSizeTab(newSizeTab);
    },
    [selectedLevel]
  );

  useEffect(
    function () {
      if (gameStarted) {
        const shuffleArrayWords = shuffleArray(arrOfWords);
        const palavrasBaralhadas = shuffleArrayWords.slice(0, numOfWords);
        const handle = handleVector(numOfWords, sizeTab, palavrasBaralhadas);
        setList(palavrasBaralhadas);
        setArrayLetters(handle);contadorPalavrasMatched = 0;
      } else {
        setArrayLetters(INITIAL_STATE.ArrayLetters);
        indexSelected = [];
        indexSelectedCerta = [];
        
        setMatchedWord([]);
        setContaPalavras(0)
        setWord([]);
        setIndexList([]);
        setPalavra("");
      }
    },
    [gameStarted]
  );

  const handleDragStart = (index) => {//tentativa de esconder a "ghost image" quando se arrasta
    index.dataTransfer.setDragImage(new Image(), 0, 0);
  };

  const handleOnDrag = (index) => {
    if (word.includes(index)) {
      return 0;
    } else {
      indexSelected = word;
      indexSelected.push(index);
      setWord(indexSelected);
    }
  };

  const handleDragEnd = () => {
    let palavraConcatenada = "";
    word.forEach((ind) => {
      palavraConcatenada = palavraConcatenada + ArrayLetters[ind];
    });
    list.forEach((l) => {
      if (palavraConcatenada === l) {
        indexSelectedCerta = matchedWord;
        word.forEach((w) => {
          indexSelectedCerta.push(parseInt(w));
        });setMatchedWord(indexSelectedCerta);
        
        indexSelectedCerta = indexList;
        indexSelectedCerta.push(list.indexOf(l));
        setIndexList(indexSelectedCerta);
        contadorPalavrasMatched = contaPalavras;
        contadorPalavrasMatched = contadorPalavrasMatched +1;
        setContaPalavras(contadorPalavrasMatched);
        updatePoints();
        console.log(contaPalavras);
        if(contaPalavras==list.length-1){
          
          onGameStart();}
      }
    });
    setWord([]);
  };

  function renderArrayLetters() {
    const lista = ArrayLetters.map((item, index) => {
      return (
        <div
          key={index}
          draggable="true"
          event="dragover"
          className={word.includes(index) ? "clicked" : "item"}
          id={matchedWord.includes(index) ? "matched" : "item"}
          onDragOver={() => handleOnDrag(index)}
          onDragEnd={() => handleDragEnd()}
        >
          {item}
        </div>
      );
    });

    return <div className={`${gameClass}`}>{lista}</div>;
  }

  function renderLista() {
    const palavras = list.map((item, index) => {
      return (
        <div key={`${item}-${index}`} className={indexList.includes(index)? "checked" : ""}>
          {item}
        </div>
      );
    });

    return (
      <div
        id="listOfWords"
      >
        {palavras}
      </div>
    );
  }

  const hasLetters = Array.isArray(ArrayLetters) && ArrayLetters.length > 0;
  if (!hasLetters) {
    return null;
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    if(selectedLevel==="1"){
      arrOfWordsBasic.push(palavra.toUpperCase());
    }
    else if(selectedLevel==="2"){
      arrOfWordsMedium.push(palavra.toUpperCase());
    }
    else if(selectedLevel==="3"){
      arrOfWordsHard.push(palavra.toUpperCase());
    }
    else{
      alert("Selecione um nível primeiro!");
    }
    console.log("array:" + arrOfWordsBasic);

  }
  function introduzPalavra(){
        return(
        <form onSubmit={handleSubmit}>  
        <label>
          Palavra:<br/>
          <input type="text" value={palavra} onChange={(e)=>setPalavra(e.target.value)} />
          </label>
          <input type="submit" value="Adicionar"/>
        </form>
    );
  }

  return (


    <table id="gamePanel">
      <tbody>
        <tr>
          <th>{introduzPalavra()}</th>
          <th>{renderArrayLetters()}</th>
          <th>{renderLista()}</th>
          
        </tr>
      </tbody>
    </table>

  );
};

export default GamePanel;
