export const userStoryOneText = (
  <>
    <p>Start off by recreating the current system Santa has.<br/>
    Currently his system allows a single delivery elf to move presents into his Sleigh:<br/>Once a delivery elf has a present it will take him a while to put it into Santa’s Sleigh.
    <br/>Once he has he calls back to say he’s available to transport another present.</p>

    <ul>
      🧝 <strong>One Elf, One Task: Currently, <strong>one delivery elf</strong> is responsible for moving presents to Santa's sleigh.</strong><br /><br />
      ⏳ <strong>Time Factor: Once the elf takes a present, it takes <strong>some time</strong> to load it into the sleigh.</strong>
    </ul>
  </>
);

export const userStoryTwoText = (
  <>
    <p>Santa has asked Mrs Claus to organise a number of delivery elves who will put presents into his Sleigh.<br/>Mrs Claus will operate as a present receiver from the Toy Machines. <br />She will then give these presents to the available delivery elves. <br />If no elves are available she will keep hold of the present until they are available.</p>
    <ul>
      🧑‍🎄 <strong>Mrs Claus' Role She acts as the <strong>present receiver</strong> from the Toy Machines.<br /></strong>
      🧝‍♀️ <strong>Elf Team: Presents are handed to <strong>available elves</strong> for sleigh loading.<br /></strong>
      📦 <strong>Handling Overflow: If no elves are available, Mrs Claus temporarily <strong>stores the presents</strong> until they can be delivered.</strong>
    </ul>
  </>
);

export const userStoryThreeText = (
  <>
    <p>Each present forms part of a families delivery, which consist of 1..N presents.<br />The Toy Machine cannot guarantee that all a families presents will be sent to Mrs Claus together. <br />Other families presents could come in-between.<br /> Where possible, presents from different families should not be put on the sleigh independently.<br />But the delivery elves are an expensive resource so we’d prefer the requests to be interleaved rather than having them sit idle.<br />You will need to devise a strategy to allow Mrs Claus to deliver presents by family when possible.</p>
    <ul>
      🎁 <strong>Grouped Deliveries: Each family’s delivery consists of 1..N presents</strong><br />
      🔄 <strong>Interleaving: Presents from different families may arrive out of order</strong><br />
      ⛔ <strong>Minimize Independent Loading: Aim to load presents for one family together, but keep elves productive by interleaving requests.</strong><br />
      🤔 <strong>Your Challenge: Devise a strategy for Mrs Claus to prioritize grouped family deliveries.</strong><br />
    </ul>
  </>
);

export const userStoryFourText = (
  <>
    <h4>❌ <strong>Naughty List Handling</strong></h4>
    <p>Santa has just received news that some families have been very naughty during the holiday period.<br /> He wants to be able to cancel presents for these families by telling Mrs Claus<br /> to discard their presents. Sleigh Interface </p>
    <ul>
      🚫 <strong>Discard Presents: Mrs Claus must discard the presents for families flagged by Santa as naughty</strong><br/>
      🤔 <strong>Your Challenge: <li>Create a way to remove families from the naughty list and discard their presents.</li></strong><strong><li>Create a way to add families and their presents to the Sleigh.</li></strong><strong><li>Connect the flow with the Elves component.</li></strong>
    </ul>
  </>
);