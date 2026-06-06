import '@/styles/components/__mapIframe.scss';

type Props = {
  mapIframeSrc: string;
};

function MapIframe({ mapIframeSrc }: Props) {
  return (
    <iframe
      src={mapIframeSrc}
      className="googleMap_iframe"
      loading="lazy"
    ></iframe>
  );
}

export default MapIframe;
