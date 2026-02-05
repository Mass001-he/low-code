import { create } from "zustand";

export interface ComponentSchema {
  id: string;
  type: string;
  name?: string;
  description?: string;
  props: Record<string, unknown>;
  children?: ComponentSchema[];
}

interface ComponentsState {
  components: ComponentSchema[];
}

interface ComponentsActions {
  addComponent: (component: ComponentSchema) => void;
  removeComponent: (id: string) => void;
}

const mockComponent: ComponentSchema = {
  id: "1",
  type: "Button",
  name: "Button",
  description: "A button component",
  props: {
    children: ["Click me"],
    type: 'primary',
  },
};

export const useComponentsStore = create<ComponentsState & ComponentsActions>((set) => ({
  components: [mockComponent],
  addComponent: (component) => set((state) => ({ components: [...state.components, component] })),
  removeComponent: (id) => set((state) => ({ components: state.components.filter((component) => component.id !== id) })),
}));
