(function () {
   Blockly.Blocks['robotcurrentposition'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Position actuelle");
      this.setOutput(true, "Position");
      this.setColour(230);
   this.setTooltip("Retourne la position actuelle du robot");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['robotgotoposition'] = {
    init: function() {
      this.appendValueInput("POSITION")
          .setCheck("Position")
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField("Déplace le robot jusqu'à");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
   this.setTooltip("Déplace le robot vers une position donnée");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['robotmove'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Déplace le robot")
          .appendField("X:")
          .appendField(new Blockly.FieldNumber(0), "MoveX")
          .appendField("Y:")
          .appendField(new Blockly.FieldNumber(0), "MoveY")
          .appendField("Z:")
          .appendField(new Blockly.FieldNumber(0), "MoveZ");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("Déplacement du robot");
   this.setHelpUrl("");
    }
  };  
  
  Blockly.Python['robotcurrentposition'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'Robot.currentPosition()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['robotgotoposition'] = function(block) {
    var value_position = Blockly.Python.valueToCode(block, 'POSITION', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'Robot.gotoPosition(' + value_position + ')\n';
    return code;
  };  

  Blockly.Python['robotmove'] = function(block) {
    var number_movex = block.getFieldValue('MoveX');
    var number_movey = block.getFieldValue('MoveY');
    var number_movez = block.getFieldValue('MoveZ');
    // TODO: Assemble Python into code variable.
    var code = 'Robot.move(' + number_movex + ', ' + number_movey + ', ' + number_movez + ')\n';
    return code;
  };
})();