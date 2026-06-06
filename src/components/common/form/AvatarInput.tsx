import { getImageUrl } from '@/utils/image';
import { Avatar, Button, Group } from '@mantine/core';
import { forwardRef, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  image: File | string | null;
  name: string;
  fileRef: React.RefObject<HTMLInputElement>;
  handleChange: (file: File | null) => void;
  isLoading?: boolean;
}

const AvatarInput = forwardRef<HTMLInputElement, Props>(
  ({ image, name, handleChange, fileRef, isLoading = false, ...props }, _) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;
      let file: File | FileList | null = null;
      file = files?.length ? files[0] : null;
      handleChange(file);
    };

    const handleBrowseClick = () => {
      fileRef.current?.click();
    };

    return (
      <>
        <Group gap={16} align="center">
          <Avatar
            src={image ? getImageUrl(image) : null}
            alt={'image'}
            radius="xl"
            className="rounded border"
            size={'xl'}
            color="primary"
          />

          <Button type="button" variant="outline" onClick={handleBrowseClick}>
            Change Image
          </Button>
        </Group>

        <input
          ref={fileRef}
          type="file"
          hidden
          multiple={false}
          {...props}
          onChange={handleFileChange}
          disabled={isLoading}
          accept="image/*"
        />
      </>
    );
  }
);

AvatarInput.displayName = 'AvatarInput';

export default AvatarInput;
