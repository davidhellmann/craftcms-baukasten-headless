<template>
  <div
    :class="[cc.root, cc.rootClasses, 'group']"
    :data-component="cs.name"
    data-theme="default"
  >
    <Listbox v-model="setTheme">
      <ListboxButton :class="[cc.listboxButton]">
        {{ currentTheme?.name }}
        <ChevronUpDownIcon :class="[cc.icon]" />
      </ListboxButton>
      <ListboxOptions :class="[cc.listboxOptions]">
        <ListboxOption
          v-for="theme in themes"
          :key="theme.value"
          :value="theme"
          :class="[cc.listboxOption]"
        >
          {{ theme.name }}
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const props = defineProps({
  rootClasses: {
    type: String,
    default: "",
  },
});

const themes = [
  { name: "Default (light)", value: "default" },
  { name: "Dark", value: "dark" },
];

const localStorageTheme = localStorage.getItem("theme");
const currentTheme = ref(
  localStorageTheme
    ? themes.find((x) => x.value === localStorageTheme)
    : themes[0]
);

const setTheme = computed({
  get() {
    if (currentTheme.value) {
      localStorage.setItem("theme", currentTheme.value.value);
      document.documentElement.setAttribute(
        "data-theme",
        currentTheme.value.value
      );

      // const classes = [...document.documentElement.classList].filter(x => !x.startsWith('theme-'));
      //   classes.push(`theme-${currentTheme.value.value}`)
      //
      // document.documentElement.setAttribute('class', classes.join(' '))
    }

    return currentTheme.value;
  },
  set(theme) {
    if (theme) {
      localStorage.setItem("theme", theme.value);
      currentTheme.value = theme;
    }
  },
});

const cs: ICompSettings = {
  name: "ThemeSwitcher",
};

const cc: ICompClasses = {
  root: "relative w-60 group",
  rootClasses: props.rootClasses || "",
  headline: "font-bold mb-2 text-gray-600",
  listboxButton:
    "relative w-full cursor-default rounded-lg text-secondary-200 bg-secondary-600 py-2 pl-3 pr-10 text-left border-2 border-secondary-400 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm flex flex-row justify-between items-center",
  listboxOptions:
    "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg border border-black  text-black focus:outline-none sm:text-sm",
  icon: "w-6 h-6 pointer-events-none absolute right-0 pr-2",
  listboxOption:
    "relative cursor-default select-none py-2 pl-4 pr-4 text-black",
};
</script>
