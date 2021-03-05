/*OLÁ, BOSSINI! TENTEI FAZER O EX 2 PORÉM NÃO CONSEGUI FAZER OS NÚMEROS APARECEREM NOS QUADRADOS USANDO A FUNÇÃO 'renderizarQuadrado(i)'. FIQUE DOIS DIAS TENTANDO MAS NÃO CHEGUEI À CONCLUSÃO. ESPERO QUE CONSIDERE A TENTATIVA. ESTOU ME EMPENHANDO MAIS PARA ENTENDER A MATÉRIA E CONSEGUIR PASSAR, JÁ QUE É MEU ÚLTIMO SEMESTRE NA FATEC. PARA MIM ESSA MATÉRIA NÃO ESTÁ SENDO FÁCIL PORQUE NÃO TENHO MUITO CONHECIMENTO EM DESENVOLVIMENTO WEB E MOBILE, PORÉM VOU TENTAR MEU MELHOR PARA SER APROVADO. MUITO OBRIGADO!*/
class Jogo extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Area
            quadrados={Array(60)
              .fill()
              .map((value, pos) => pos)}
          />
        </div>
      </div>
    );
  }
}

class Area extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quadrados: Array(60).fill(null),
      xIsNext: true
    };
  }
  
  incrementCount() {
  this.setState((state) => {
    // Importante: use `state` em vez de `this.state` quando estiver atualizando.
    return {count: state.count + 1}
  });
}

  renderizarQuadrado(i) {
    let cont=0;
    return (
      <Quadrado
        {...this.state.value}{...""}
        //value={this.state.quadrados[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  
  handleClick(i) {
    //faz uma cópia do vetor
    const quadrados = this.state.quadrados.slice();
    /*if (calculateWinner (quadrados)){      
      alert ('Jogo já acabou');      
      return;    
    }*/
    if (quadrados[i]){      
      alert ('Número já escolhido!')      
      return;    
    }
    quadrados[i] = this.state.xIsNext ? 'X' : 'X';
    this.setState({quadrados:quadrados, xIsNext: !this.state.xIsNext,});
  }
  render() {
    //const vencedor = calculateWinner (this.state.quadrados);
    let status; 
    status = 'Jogo da MEGA SENA'; 
    /*if (vencedor){        
      status = 'Vencedor: ' + vencedor;        
    }      
    else{        
      status = 'Jogador: ' + (this.state.xIsNext ? 'X' : 'O');      
    }*/
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderizarQuadrado(0)}
          {this.renderizarQuadrado(1)}
          <Quadrado value={3} />
          <Quadrado value={4} />
          <Quadrado value={5} />
          <Quadrado value={6} />
          <Quadrado value={7} />
          <Quadrado value={8} />
          <Quadrado value={9} />
          <Quadrado value={10} />
        </div>
        <div className="board-row">
          <Quadrado value={11} />
          <Quadrado value={12} />
          <Quadrado value={13} />
          <Quadrado value={14} />
          <Quadrado value={15} />
          <Quadrado value={16} />
          <Quadrado value={17} />
          <Quadrado value={18} />
          <Quadrado value={19} />
          <Quadrado value={20} />
        </div>
        <div className="board-row">
          <Quadrado value={21} />
          <Quadrado value={22} />
          <Quadrado value={23} />
          <Quadrado value={24} />
          <Quadrado value={25} />
          <Quadrado value={26} />
          <Quadrado value={27} />
          <Quadrado value={28} />
          <Quadrado value={29} />
          <Quadrado value={30} />
        </div>
        <div className="board-row">
          <Quadrado value={31} />
          <Quadrado value={32} />
          <Quadrado value={33} />
          <Quadrado value={34} />
          <Quadrado value={35} />
          <Quadrado value={36} />
          <Quadrado value={37} />
          <Quadrado value={38} />
          <Quadrado value={39} />
          <Quadrado value={40} />
        </div>
        <div className="board-row">
          <Quadrado value={41} />
          <Quadrado value={42} />
          <Quadrado value={43} />
          <Quadrado value={44} />
          <Quadrado value={45} />
          <Quadrado value={46} />
          <Quadrado value={47} />
          <Quadrado value={48} />
          <Quadrado value={49} />
          <Quadrado value={50} />
        </div>
        <div className="board-row">
          <Quadrado value={51} />
          <Quadrado value={52} />
          <Quadrado value={53} />
          <Quadrado value={54} />
          <Quadrado value={55} />
          <Quadrado value={56} />
          <Quadrado value={57} />
          <Quadrado value={58} />
          <Quadrado value={59} />
          <Quadrado value={60} />
        </div>
      </div>
    );
  }
}

class Quadrado extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = { value: null };
  }*/
  render() {
    return (
      <button
        className="quadrado"
        onClick={() => {this.props.onClick()}}>
        {this.props.value} 
        </button> 
          /*{this.setState({ value: "X" });
        }}
      >
        {" "}
        {this.state.value}{" "}
      </button>*/ 
    );
  }
}

/*function calculateWinner(squares) {  
  const lines = [    
    [0, 1, 2],    
    [3, 4, 5],    
    [6, 7, 8],    
    [0, 3, 6],    
    [1, 4, 7],    
    [2, 5, 8],    
    [0, 4, 8],    
    [2, 4, 6],  
  ];  
  for (let i = 0; i < lines.length; i++) {    
    //atribuição via desestruturação     
    const [a, b, c] = lines[i];    
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {      
      return squares[a];    
    }  
  }  
  return null;
}*/

/*class Quadrado extends React.Component{
  constructor (props){
    super (props);
    this.state = {
      value: null,
    };  
  }  
  render (){
    return (
      <button
        className="quadrado"
        onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}*/

/*function Quadrado (props){
  return (
    <button className="quadrado" onClick={props.onClick}>
      {props.value}
      </button>
  );
}*/

ReactDOM.render(<Jogo />, document.getElementById("root"));

/*ReactDOM.render(  
  <Tabuleiro 
    quadrados={Array(9).
    fill().
    map((value, pos) => pos)} 
  />,  
  document.getElementById("root")
);*/

/*ReactDOM.render (
  <Quadrado 
    onClick={() => {      
      alert ('Clicou!');
    }}
    value={2 + 2}  
  />, 
  document.getElementById ("root")
);*/