exports.run = (client, message, args) => {

  const rookB = {
    'icon':'♖'
  };
  const knightB = {
    'icon':'♘'
  };
  const bishopB = {
    'icon':'♗'
  };
  const kingB = {
    'icon':'♕'
  };
  const queenB = {
    'icon':'♔'
  };
  const pawnB = {
    'icon':'♙',
    'movement':(moveTo) => {

    }
  };

  const rookW = {
    'icon':'♜'
  };
  const knightW = {
    'icon':'♞'
  };
  const bishopW = {
    'icon':'♝'
  };
  const kingW = {
    'icon':'♛'
  };
  const queenW = {
    'icon':'♚'
  };
  const pawnW = {
    'icon':'♟'
  };

  const empty = {
    'icon':'… '
  };

  let boardObj = {
    'a1':rookB, 'a2':pawnB, 'a3':empty, 'a4':empty, 'a5':empty, 'a6':empty, 'a7':pawnW, 'a8':rookW,
    'b1':knightB, 'b2':pawnB, 'b3':empty, 'b4':empty, 'b5':empty, 'b6':empty, 'b7':pawnW, 'b8':knightW,
    'c1':bishopB, 'c2':pawnB, 'c3':empty, 'c4':empty, 'c5':empty, 'c6':empty, 'c7':pawnW, 'c8':bishopW,
    'd1':kingB, 'd2':pawnB, 'd3':empty, 'd4':empty, 'd5':empty, 'd6':empty, 'd7':pawnW, 'd8':kingW,
    'e1':queenB, 'e2':pawnB, 'e3':empty, 'e4':empty, 'e5':empty, 'e6':empty, 'e7':pawnW, 'e8':queenW,
    'f1':bishopB, 'f2':pawnB, 'f3':empty, 'f4':empty, 'f5':empty, 'f6':empty, 'f7':pawnW, 'f8':bishopW,
    'g1':knightB, 'g2':pawnB, 'g3':empty, 'g4':empty, 'g5':empty, 'g6':empty, 'g7':pawnW, 'g8':knightW,
    'h1':rookB, 'h2':pawnB, 'h3':empty, 'h4':empty, 'h5':empty, 'h6':empty, 'h7':pawnW, 'h8':rookW,
  };

  var boardMsg = `
8 ║${boardObj.a8.icon} ${boardObj.b8.icon} ${boardObj.c8.icon} ${boardObj.d8.icon} ${boardObj.e8.icon} ${boardObj.f8.icon} ${boardObj.g8.icon} ${boardObj.h8.icon}
7 ║${boardObj.a7.icon} ${boardObj.b7.icon} ${boardObj.c7.icon} ${boardObj.d7.icon} ${boardObj.e7.icon} ${boardObj.f7.icon} ${boardObj.g7.icon} ${boardObj.h7.icon}
6 ║${boardObj.a6.icon} ${boardObj.b6.icon} ${boardObj.c6.icon} ${boardObj.d6.icon} ${boardObj.e6.icon} ${boardObj.f6.icon} ${boardObj.g6.icon} ${boardObj.h6.icon}
5 ║${boardObj.a5.icon} ${boardObj.b5.icon} ${boardObj.c5.icon} ${boardObj.d5.icon} ${boardObj.e5.icon} ${boardObj.f5.icon} ${boardObj.g5.icon} ${boardObj.h5.icon}
4 ║${boardObj.a4.icon} ${boardObj.b4.icon} ${boardObj.c4.icon} ${boardObj.d4.icon} ${boardObj.e4.icon} ${boardObj.f4.icon} ${boardObj.g4.icon} ${boardObj.h4.icon}
3 ║${boardObj.a3.icon} ${boardObj.b3.icon} ${boardObj.c3.icon} ${boardObj.d3.icon} ${boardObj.e3.icon} ${boardObj.f3.icon} ${boardObj.g3.icon} ${boardObj.h3.icon}
2 ║${boardObj.a2.icon} ${boardObj.b2.icon} ${boardObj.c2.icon} ${boardObj.d2.icon} ${boardObj.e2.icon} ${boardObj.f2.icon} ${boardObj.g2.icon} ${boardObj.h2.icon}
1 ║${boardObj.a1.icon} ${boardObj.b1.icon} ${boardObj.c1.icon} ${boardObj.d1.icon} ${boardObj.e1.icon} ${boardObj.f1.icon} ${boardObj.g1.icon} ${boardObj.h1.icon}
——╚══════════════════════
——a  b  c  d  e  f  g  h`


message.channel.send("```" + boardMsg + "```");

}
