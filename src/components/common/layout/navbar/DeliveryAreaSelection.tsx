import { NAVBAR_DUMMY_OPT } from '@/static/navbar';
import { Select } from '@mantine/core';
import { CaretDown, MapPin } from '@phosphor-icons/react/dist/ssr';

type TDeliveryAreaProps = {
  className?: string;
};

const DeliveryAreaSelection = ({ className }: TDeliveryAreaProps) => {
  return (
    <Select
      placeholder="Select Delivery Area"
      data={NAVBAR_DUMMY_OPT}
      leftSection={<MapPin size={16} weight="bold" />}
      leftSectionPointerEvents="none"
      className={`navbar-delivery ${className ? className : ''}`}
      rightSection={<CaretDown size={18} weight="bold" />}
    />
  );
};

export default DeliveryAreaSelection;
