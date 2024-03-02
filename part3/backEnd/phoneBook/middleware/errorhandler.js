function noPersonRecord(err, req, res, next) {
  if (err.message === 'No record exist') {
    console.error('Could not find data in DB', err.stack);
    return res.status(500).send({
      error: 'no data inside phone record',
    });
  }
  next(err); // Pass the error to the next middleware if it doesn't match
}

function cannotFindEntry(err, req, res, next) {
  if (err.message === 'Id does not exist') {
    console.error('Wrong id', err.stack);
    return res.status(400).send({ error: 'Id does not exist' });
  }
  next(err); // Pass the error to the next middleware if it doesn't match
}

function cannotBeDeleted(err, req, res, next) {
  if (err.message === 'Cannot delete entry') {
    console.error('Cannot delete entry', err.stack);
    return res.status(409).send({ error: 'worngID' });
  }
  next(err); // Pass the error to the next middleware if it doesn't match
}

function couldNotUpdateEntry(err, req, res, next) {
  if (err.message === 'entry cannot be modified' || 'user does not exist') {
    console.error('could not update number', err.stack);
    return res
      .status(304)
      .send({ error: 'could not update number successfully' });
  }
  next(err);
}

module.exports = {
  noPersonRecord,
  cannotFindEntry,
  cannotBeDeleted,
  couldNotUpdateEntry,
};
