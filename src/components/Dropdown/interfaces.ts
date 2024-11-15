export default interface DropdownProps {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};;;;;;;;;;

export interface DropdownStylesProps {
  $isOpen: boolean;
}
