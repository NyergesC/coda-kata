//UserStory2:
  // Process a present if an elf is available
  const processPresent = () => {
    if (presentQueue.length === 0 || availableElves.every((elf) => elf.working)) return;

    // Find the first available elf
    const elfIndex = availableElves.findIndex((elf) => !elf.working);
    if (elfIndex !== -1) {
      const updatedElves = [...availableElves];
      updatedElves[elfIndex].working = true; // Mark the elf as working
      setAvailableElves(updatedElves);

      const [present, ...remainingQueue] = presentQueue; // Take the first present from the queue
      setPresentQueue(remainingQueue); // Update the present queue

      // Simulate the packing process
      setTimeout(() => {
        setSleighPresents((prev) => [...prev, { ...present, state: 'packed' }]); // Add packed present to sleigh
        updatedElves[elfIndex].working = false; // Mark the elf as available again
        setAvailableElves(updatedElves);
      }, 2000); // Simulated packing delay
    }
  };


  //userStory3:
   const assignElvesToPack = () => {
    if (familyQueue.length === 0 || availableElves.every((elf) => elf.working)) return;

    // Extract the first family and their presents
    const nextFamily = familyQueue[0];
    const presentToPack = nextFamily.presents.shift();

    // Remove family if all their presents are packed
    const updatedQueue = nextFamily.presents.length > 0 
      ? [nextFamily, ...familyQueue.slice(1)] 
      : familyQueue.slice(1);

    // Update FamilyQueue
    setFamilyQueue(updatedQueue);

    // Assign an elf to pack the present Hint: UserStory2
    const elfIndex = availableElves.findIndex((elf) => !elf.working);
    if (elfIndex !== -1) {
      const updatedElves = [...availableElves];
      updatedElves[elfIndex].working = true;
      setAvailableElves(updatedElves);

      setTimeout(() => {
        setSleighPresents((prev) => [
          ...prev,
          { ...presentToPack, state: 'packed', familyId: nextFamily.familyId },
        ]);
        updatedElves[elfIndex].working = false;
        setAvailableElves(updatedElves);
      }, 2000); // Simulate packing time
    }
  };

  //userStory4:

  // Add or remove families from the naughty list
  const handleAddToNaughtyList = (familyId) => {
    setNaughtyFamilies((prev) =>
      prev.includes(familyId) ? prev.filter((id) => id !== familyId) : [...prev, familyId]
    );
  };

  // Discard presents for families on the naughty list
  const discardPresents = () => {
    const updatedQueue = familyQueue.filter(
      (family) => !naughtyFamilies.includes(family.familyId)
    );
    setFamilyQueue(updatedQueue);
    setNaughtyFamilies([]); // Clear the naughty list after discarding presents
  };

  // Handle receiving presents from the elves
  const handleReceivePresent = () => {
    if (availableElves.every((elf) => elf.working)) return; // Wait if all elves are busy

    const nextPresent = familyQueue.flatMap((family) => family.presents).shift();
    if (!nextPresent) return;

    // Simulate packing with an available elf
    const elfIndex = availableElves.findIndex((elf) => !elf.working);
    const updatedElves = [...availableElves];
    updatedElves[elfIndex].working = true;
    setAvailableElves(updatedElves);

    setTimeout(() => {
      setPresentQueue((prev) => [...prev, { ...nextPresent, state: 'packed' }]);
      updatedElves[elfIndex].working = false;
      setAvailableElves(updatedElves);
    }, 2000); // Simulated delay for packing
  };


  const handlePackNextFamily = () => {
    if (familyQueue.length === 0) return;

    // Pack the first family's presents and remove them from the queue
    const [nextFamily, ...remainingQueue] = familyQueue;
    setPresentQueue((prev) => [...prev, ...nextFamily.presents]);
    setFamilyQueue(remainingQueue);
  };
