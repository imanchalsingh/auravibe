import React, { useState } from 'react';
import styled from 'styled-components';
import { Rnd, RndResizeCallback, RndDragCallback } from 'react-rnd';
import html2canvas from 'html2canvas'; // For capturing screenshots

// Define element types
type ElementType = 'header' | 'text' | 'button' | 'image';

// Define the structure of an element
interface Element {
  id: number;
  component: JSX.Element;
  type: ElementType;
  width: number;
  height: number;
  x: number;
  y: number;
  content: string; // To hold the text content for editable elements
}

// Styled Components for layout and UI
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const PreviewContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  min-height: 400px;
  position: relative;
`;

const NavBar = styled.div`
  background-color: #333;
  padding: 10px;
  color: #fff;
  display: flex;
  justify-content: space-between;
`;

const PageNav = styled.div`
  display: flex;
  gap: 10px;
`;

const PageButton = styled.button`
  background-color: #fff;
  color: #333;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const UploadedImagePreview = styled.img`
  max-width: 100%;
  max-height: 200px;
  margin-top: 20px;
`;

const PreviewNav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #333;
  padding: 10px;
`;

const PreviewNavLink = styled.button`
  background-color: #fff;
  color: #333;
  margin: 0 10px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

// Editable component for inline editing
const EditableElement = styled.div<{ isEditing: boolean }>`
  border: ${({ isEditing }) => (isEditing ? '1px solid blue' : 'none')};
  padding: 5px;
  cursor: ${({ isEditing }) => (isEditing ? 'text' : 'move')};
`;

const App: React.FC = () => {
  const [pages, setPages] = useState<number[]>([1]); // List of page numbers
  const [activePage, setActivePage] = useState<number>(1); // The currently active page
  const [elementsByPage, setElementsByPage] = useState<{ [key: number]: Element[] }>({ 1: [] }); // Elements for each page
  const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false); // Preview mode toggle
  const [uploadedImage, setUploadedImage] = useState<string | null>(null); // Store the uploaded image URL

  // Function to add elements to the current page
  const addElement = (element: JSX.Element, type: ElementType, content: string) => {
    const newElement: Element = {
      id: Date.now(),
      component: element,
      type,
      width: 200,
      height: 100,
      x: 50,
      y: 50,
      content, // Store the content for editable elements
    };
    setElementsByPage((prevElements) => ({
      ...prevElements,
      [activePage]: [...(prevElements[activePage] || []), newElement],
    }));
  };

  // Function to delete an element by ID on the current page
  const deleteElement = (id: number) => {
    setElementsByPage((prevElements) => ({
      ...prevElements,
      [activePage]: prevElements[activePage].filter((el) => el.id !== id),
    }));
  };

  // Adding specific elements
  const addHeader = () => {
    const header = <h1 style={{ color: 'blue' }}>Header</h1>;
    addElement(header, 'header', 'Header');
  };

  const addText = () => {
    const text = <p style={{ fontSize: '18px', color: 'black' }}>This is a text element</p>;
    addElement(text, 'text', 'This is a text element');
  };

  const addButton = () => {
    const button = <button style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white' }}>Click Me</button>;
    addElement(button, 'button', 'Click Me');
  };

  // Function to handle image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      const imageElement = <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '100%' }} />;
      addElement(imageElement, 'image', imageUrl);
    }
  };

  // Adding pages and handling navigation
  const addPage = () => {
    const newPage = pages.length + 1;
    setPages([...pages, newPage]);
    setElementsByPage((prevElements) => ({
      ...prevElements,
      [newPage]: [],
    }));
    setActivePage(newPage);
  };

  // Function to handle drag
  const handleDragStop: RndDragCallback = (e, d) => {
    const { id } = d.node.dataset; // Use dataset to access ID of the element being dragged
    if (!id) return;

    setElementsByPage((prevElements) => ({
      ...prevElements,
      [activePage]: prevElements[activePage].map((el) =>
        el.id === parseInt(id) ? { ...el, x: d.x, y: d.y } : el
      ),
    }));
  };

  // Function to handle resize
  const handleResizeStop: RndResizeCallback = (e, direction, ref, delta, position) => {
    const { id } = ref.dataset; // Use dataset to access ID of the element being resized
    if (!id) return;

    setElementsByPage((prevElements) => ({
      ...prevElements,
      [activePage]: prevElements[activePage].map((el) =>
        el.id === parseInt(id)
          ? { ...el, width: parseFloat(ref.style.width), height: parseFloat(ref.style.height), x: position.x, y: position.y }
          : el
      ),
    }));
  };

  // Capture the current page as an image
  const saveAsImage = () => {
    const previewElement = document.getElementById('preview-container');
    if (previewElement) {
      html2canvas(previewElement).then((canvas) => {
        const link = document.createElement('a');
        link.download = `page-${activePage}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
  };

  // Inline editing handler
  const handleEdit = (id: number, newContent: string) => {
    setElementsByPage((prevElements) => ({
      ...prevElements,
      [activePage]: prevElements[activePage].map((el) =>
        el.id === id ? { ...el, content: newContent } : el
      ),
    }));
  };

  return (
    <AppContainer>
      <NavBar>
        <PageNav>
          {pages.map((page) => (
            <PageButton key={page} onClick={() => setActivePage(page)}>
              Page {page}
            </PageButton>
          ))}
          <PageButton onClick={addPage}>+ Add Page</PageButton>
        </PageNav>
        <button onClick={() => setIsPreviewMode(!isPreviewMode)}>
          {isPreviewMode ? 'Exit Preview' : 'Preview'}
        </button>
        <button onClick={saveAsImage}>Save as Image</button>
      </NavBar>

      <h1>Website Creator - Page {activePage}</h1>

      {!isPreviewMode && (
        <Toolbar>
          <button onClick={addHeader}>Add Header</button>
          <button onClick={addText}>Add Text</button>
          <button onClick={addButton}>Add Button</button>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </Toolbar>
      )}

      <PreviewContainer id="preview-container">
        {elementsByPage[activePage]?.map((el) => (
          <Rnd
            key={el.id}
            data-id={el.id}
            bounds="parent"
            position={{ x: el.x, y: el.y }}
            size={{ width: el.width, height: el.height }}
            onDragStop={handleDragStop}
            onResizeStop={handleResizeStop}
          >
            <EditableElement
              isEditing={isPreviewMode}
              contentEditable={!isPreviewMode}
              suppressContentEditableWarning
              onBlur={(e) => handleEdit(el.id, e.currentTarget.textContent || '')}
            >
              {el.type === 'header' && <h1>{el.content}</h1>}
              {el.type === 'text' && <p>{el.content}</p>}
              {el.type === 'button' && <button>{el.content}</button>}
              {el.type === 'image' && <img src={el.content} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '100%' }} />}
            </EditableElement>
          </Rnd>
        ))}
        {uploadedImage && (
          <div style={{ marginTop: '20px' }}>
            <h2>Uploaded Image:</h2>
            <UploadedImagePreview src={uploadedImage} alt="Uploaded Preview" />
          </div>
        )}
      </PreviewContainer>

      {!isPreviewMode && (
        <DeleteButton onClick={() => deleteElement(elementsByPage[activePage]?.[elementsByPage[activePage].length - 1]?.id || 0)}>
          Delete Element
        </DeleteButton>
      )}
    </AppContainer>
  );
};

export default App;
