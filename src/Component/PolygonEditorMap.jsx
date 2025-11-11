// components/PolygonEditorMap.jsx
import { MapContainer, TileLayer, Marker, Polygon, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const DraggableMarker = ({ position, onDragEnd, onClick }) => {
  return (
    <Marker
      position={position}
      draggable={true}
      eventHandlers={{
        dragend: (e) => onDragEnd(e.target.getLatLng()),
        click: onClick,
        contextmenu: onClick, // right-click to delete
      }}
    />
  );
};

const ClickHandler = ({ addMarker }) => {
  useMapEvents({
    click(e) {
      addMarker(e.latlng);
    }
  });
  return null;
};

export default function PolygonEditorMap({ positions, setPositions }) {
  const addMarker = (latlng) => {
    setPositions([...positions, latlng]);
  };

  const moveMarker = (index, newLatLng) => {
    const updated = [...positions];
    updated[index] = newLatLng;
    setPositions(updated);
  };

  const deleteMarker = (index) => {
    const updated = [...positions];
    updated.splice(index, 1);
    setPositions(updated);
  };

  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '400px', width: '100%' }}>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <ClickHandler addMarker={addMarker} />

      {positions.map((pos, idx) => (
        <DraggableMarker
          key={idx}
          position={pos}
          onDragEnd={(newPos) => moveMarker(idx, newPos)}
          onClick={() => deleteMarker(idx)}
        />
      ))}

      {positions.length >= 3 && <Polygon positions={positions} />}
    </MapContainer>
  );
}
