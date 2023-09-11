import { Dialog, DialogProps, DialogTitle, styled } from '@mui/material';
import { Children, isValidElement } from 'react';

const StyledDialog = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    padding: '40px',
  },
}));

const StyledDialogTitle = styled(DialogTitle)(() => ({ padding: '0px', marginBottom: '30px' }));

const WrapGrid = function (props: DialogProps) {
  const { children, title } = props;

  const hasTitleComponent = Children.toArray(children).some(
    (child) => isValidElement(child) && child?.type === DialogTitle,
  );

  return (
    <StyledDialog {...props}>
      {hasTitleComponent ? (
        children
      ) : (
        <>
          <StyledDialogTitle variant="h4" sx={{ textAlign: 'center' }}>
            {title}
          </StyledDialogTitle>
          {children}
        </>
      )}
    </StyledDialog>
  );
};

export { WrapGrid as Dialog };
