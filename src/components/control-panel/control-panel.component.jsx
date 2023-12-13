import React from "react";
import { useState, useEffect } from "react";
const ControlPanel = ({gameStarted, selectedLevel, onGameStart, onSelectedLevel, timer, points}) => {

  return (
    <section id="panel-control">
      <h3 className="subtitle">Escolha do nível</h3>
      <form className="form">
        <fieldset className="col1 form-group">
          <label htmlFor="btLevel">Nível:</label>
          <select
            id="btLevel"
            defaultValue="0"
            onChange={onSelectedLevel}
            disabled={gameStarted}
          >
            <option defaultValue="0">Seleccione...</option>
            <option value="1">Básico (10x10)</option>
            <option value="2">Intermédio (12x12)</option>
            <option value="3">Avançado (14x14)</option>
          </select>
        </fieldset>
        <button
          type="button"
          id="btPlay"
          disabled={selectedLevel === "0"}
          onClick={onGameStart}
        >
          {gameStarted ? "Parar Jogo" : "Iniciar Jogo"}
        </button>
      </form>
      <div className="form-metadata">
        <dl className="col1 gameStarted list-item">
          <dt>Tempo de Jogo:</dt>
          <dd id="gameTime">{timer}</dd>
        </dl>
        <dl className="col1 gameStarted list-item">
          <dt>Pontuação:</dt>
          <dd id="points">{points}</dd>
        </dl>
      </div>
    </section>
  );
};

export default ControlPanel;
