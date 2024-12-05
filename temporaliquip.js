function wrapCondition(model, channelDef, vgChannel, refFn) {
  const modelValue = model.get('value');
  const channelValue = channelDef.get(vgChannel);
  if (modelValue === channelValue) {
    refFn();
  }
}
