import React, { useState } from 'react';

const SpriteSheetEmojiGenerator = () => {
    const [characterDescription, setCharacterDescription] = useState('');
    const [animationType, setAnimationType] = useState('');
    const [frameCount, setFrameCount] = useState('');
    const [frameDetails, setFrameDetails] = useState([]);
    const [frameGrids, setFrameGrids] = useState([]);
    const [spriteSheetPrompt, setSpriteSheetPrompt] = useState('');

    // Define colors for different parts of the character based on description
    const colors = {
        green: '🟩',
        red: '🟥',
        blue: '🟦',
        yellow: '🟨',
        orange: '🟧',
        white: '⬜️',
        black: '⬛️',
        purple: '🟪',
        brown: '🟫'
    };

    // Parse the character description into colors (e.g., "green shirt, brown pants")
    const parseCharacterDescription = () => {
        const parsedCharacter = {
            shirt: colors.green, // Default
            pants: colors.brown, // Default
            headwear: colors.purple, // Default (bandana)
            body: colors.green,  // Default
        };

        if (characterDescription.toLowerCase().includes('green shirt')) {
            parsedCharacter.shirt = colors.green;
        }
        if (characterDescription.toLowerCase().includes('brown pants')) {
            parsedCharacter.pants = colors.brown;
        }
        if (characterDescription.toLowerCase().includes('purple bandana')) {
            parsedCharacter.headwear = colors.purple;
        }

        return parsedCharacter;
    };

    
    const createEmptyGrid = () => {
      const grid = Array.from({ length: 24 }, () => Array(16).fill(colors.black)); // Default to black
      return grid;
  };
  
  const handleFrameDetailInput = (frameNumber, detail) => {
      const updatedFrames = [...frameDetails];
      updatedFrames[frameNumber - 1] = detail;
      setFrameDetails(updatedFrames);
  
      const characterVisuals = parseCharacterDescription();
      const newGrid = createEmptyGrid();
  
      // Define larger clusters for body parts
      const fillCluster = (grid, startX, startY, width, height, color) => {
          for (let i = 0; i < height; i++) {
              for (let j = 0; j < width; j++) {
                  if (startX + i < 24 && startY + j < 16) {
                      grid[startX + i][startY + j] = color;
                  }
              }
          }
      };
  
      // Populate grid with character's head
      fillCluster(newGrid, 3, 6, 3, 3, characterVisuals.headwear); // Example head position
      
      // Populate torso area based on detail (body at center for idle)
      fillCluster(newGrid, 6, 5, 4, 4, characterVisuals.shirt);
  
      // Legs are offset depending on frame details (e.g., "left foot forward")
      if (detail.toLowerCase().includes('left foot forward')) {
          fillCluster(newGrid, 10, 4, 2, 3, characterVisuals.pants); // Left leg
          fillCluster(newGrid, 10, 8, 2, 3, colors.black); // Adjusted right leg
      } else if (detail.toLowerCase().includes('right foot forward')) {
          fillCluster(newGrid, 10, 4, 2, 3, colors.black); // Adjusted left leg
          fillCluster(newGrid, 10, 8, 2, 3, characterVisuals.pants); // Right leg
      } else {
          // Default standing position
          fillCluster(newGrid, 10, 4, 2, 3, characterVisuals.pants); // Left leg
          fillCluster(newGrid, 10, 8, 2, 3, characterVisuals.pants); // Right leg
      }
  
      const updatedGrids = [...frameGrids];
      updatedGrids[frameNumber - 1] = newGrid;
      setFrameGrids(updatedGrids);
  };
  

    const handleSubmit = () => {
        const prompt = `Create a ${frameCount}-frame ${animationType} sprite sheet in 16x24 pixels, using a bright VGA 16-color palette. `;
        const framesDescription = frameDetails.map((detail, index) => `Frame ${index + 1}: ${detail}`).join(' ');
        const characterPrompt = `The character is ${characterDescription}. `;
        setSpriteSheetPrompt(`${characterPrompt} ${prompt} ${framesDescription}`);
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    Sprite Sheet Generator
                </div>
                <div className="card-body">
                    {/* New input for character description */}
                    <div>
                        <label>Describe the character's appearance:</label>
                        <input 
                            type="text" 
                            value={characterDescription} 
                            onChange={(e) => setCharacterDescription(e.target.value)} 
                            placeholder="e.g., A rogue with a green shirt, brown pants, and a purple bandana" 
                        />
                    </div>
                    
                    <div>
                        <label>What type of animation are you creating?</label>
                        <input type="text" value={animationType} onChange={(e) => setAnimationType(e.target.value)} placeholder="e.g., Walk cycle, Jump, Attack" />
                    </div>
                    <div>
                        <label>How many frames?</label>
                        <input type="number" value={frameCount} onChange={(e) => setFrameCount(e.target.value)} placeholder="e.g., 4" />
                    </div>
                    {[...Array(Number(frameCount) || 0)].map((_, index) => (
                        <div key={index}>
                            <label>Frame {index + 1} Details:</label>
                            <input
                                type="text"
                                placeholder={`Describe Frame ${index + 1}`}
                                onChange={(e) => handleFrameDetailInput(index + 1, e.target.value)}
                            />
                            {/* Display the emoji grid for each frame */}
                            {frameGrids[index] && (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(16, 1em)', marginTop: '10px' }}>
                                    {frameGrids[index].flat().map((emoji, i) => (
                                        <span key={i} style={{ fontSize: '1.5em' }}>{emoji}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <button className="btn btn-primary mt-3" onClick={handleSubmit}>Generate Sprite Sheet Prompt</button>

                    {spriteSheetPrompt && (
                        <div className="mt-3">
                            <h5>Generated Prompt:</h5>
                            <p>{spriteSheetPrompt}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SpriteSheetEmojiGenerator;
