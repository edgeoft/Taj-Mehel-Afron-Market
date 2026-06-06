import {
  CSSProperties,
  Drawer,
  MantineSize,
  Modal,
  ModalBaseStylesNames,
} from '@mantine/core';
import { X } from '@phosphor-icons/react/dist/ssr';
import { ReactNode } from 'react';

type Props = {
  opened: boolean;
  close: () => void;
  title?: string | null;
  children: ReactNode;
  drawerSize?: number | MantineSize | (string & {}) | undefined;
  hideCloseButton?: boolean;
  styles?: Partial<Record<ModalBaseStylesNames, CSSProperties>>;
  className?: string;
};

const ModalDrawerContainer = ({
  opened,
  close,
  title,
  children,
  drawerSize,
  hideCloseButton = false,
  styles,
  className,
}: Props) => {
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={title}
        centered
        display={{ base: 'none', md: 'block' }}
        closeButtonProps={{
          icon: <X size={20} color="#212121" />,
        }}
        withCloseButton={!hideCloseButton}
        styles={styles}
        className={className ?? ''}
      >
        {children}
      </Modal>

      <Drawer
        position="bottom"
        opened={opened}
        onClose={close}
        title={title}
        className={`mobile-bottom-drawer ${className ?? ''}`}
        closeButtonProps={{
          icon: !hideCloseButton ? <X size={20} color="#212121" /> : <></>,
        }}
        display={{ base: 'block', md: 'none' }}
        size={drawerSize}
        withCloseButton={!hideCloseButton}
        styles={styles}
      >
        {children}
      </Drawer>
    </>
  );
};

export default ModalDrawerContainer;
